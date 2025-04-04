/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "54Q6atoyfSny9fNqbWQVDCZrGyDiYm5R6ceaRBAYp9mQTbVt1Vo2ttmcEZfJJdEAi2csHiw7wBgXYxyQeWQ4xacu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEaKEohNDvQHXd5CR2wNcMegdRjp1KEy9HMU2tuoz82pXzQcKEZaFd51jZ91YD3pkEhmpAEp72TYY9px6g7Cqu7",
  "key1": "4YZuoMzKAzHpsUG5YxTv7bgNFA2QdtY1Nyfg6tLYUVujhysNiRWxKJGrLUAfsXkVnvj7rznNpQ8hUUy4zp8Zwarb",
  "key2": "5KG5w5aGwGuozuUY8enYpumVThJoNkLei3ATh9sdWfmM73pBvohZdRAHztDRFEkueQ4jsnaUD8gVX1yXZUhNLS5V",
  "key3": "7Rx59RfPq3t7MF7Ss6AMm4ZTvUHzrjruWfgK11ARbyuU7f8X66BfT8Tzn46JU7NPgGESSt2qtAaKjVY6PGFrotg",
  "key4": "2BdXj9NcccBcupXaB6YxPnGn1v3RfAjKKjxBswiSzPrfn4uGjUtPrSgGWtWDEVE6QaH4eV985u8CZWUcAgsBGbLQ",
  "key5": "3Gxd6AnHqwaoBUk4WuMrZpCqs1C7G8LtFAKz7BCBw1igK6C17hUgiUE6q97KGiHQppFaZYGFKCfztfi9JhEoAmFx",
  "key6": "zaAXpFjaH4nrUt9Vf4NRadameLLxWvjCUVZYto4nnuzwDBdxz6RN9JKfdpdKjRS8xKCwCtXtGwzMXa2r4MDj5Bh",
  "key7": "2ng4LbhAbgV9ZYxJdvYzaQhNTavvjNHWH4AGd9rUoM8DTfp8b7N89g6dnpba6J4nZ9Q4uQmoGd53MLD5Zd1FbPGq",
  "key8": "5Rk88QG2hcVLvxiVvVQV85escx6EWqefvSbdhUDqaCwk6FyXeKHE4y2Uuq5k54YgXv9UcYjfhxu9pZfoks66Sp5w",
  "key9": "29Svf2jhpBZaYCQaGoT4p57BsVfrL4Z9uHLnhRz4JF9Zs3PriPPkdoAPrLHEftYodSRuap5X92NXfNY9vTWSyh1E",
  "key10": "42m5DPbs8nuMAokpKW5uoucVjKM4LfKLgJZDhaLHDxmg8kMkwKh7GBYLtpwFkaWwUBs8uebQxqJ5x5zXKDgg4grj",
  "key11": "5UHjnHdj3Q6uYGd8uX2kjtjjeaFncwnS19qDkEDWtKEHAgFpH3AuPgNe7XWWBYmUnQ9rmu1d3UjvTqAxv5P5yuFR",
  "key12": "5adVLwfS6EFpayUR6Zfengftrddcjnv32bGPHysg4zzyQUFDzJ9q1xyWbkiF4dwWZqGXkkpGcEq18sujN8ddqSZE",
  "key13": "4qV8SupJBkzgD8qieDM9wDvFTbyPNKcGNEezAJFDYM46cDXgF49bkWHxxFJJBExJz2A5HEPLLHaQk9JM3Y4o8nrJ",
  "key14": "qj1TcToxmHCSNt2G97YKHvcEGKwexhdzspb76vCZr7bS8cENRrrXGVrXEBS8sgGVebcXTet5DcpZDmdTroxyXxM",
  "key15": "naETaJacXV8UFF9eKcwb8691G6Sxm1kSn22AfbucGPCmgqBXGCe8SoEDSXUjc1isnF6yttTtEPXhJJyDNLDcujB",
  "key16": "3TZ4Et1onQPusb2osvJ7taD1yzUdLnNAz8rkx2pvyABTyhsLBs9jAGptBrkmfCvjiaYL9Srwwi9h5bcDnvR9WFFn",
  "key17": "4x7Ff5Yj6pFNbPPTDbbeHd4YCsxL5JxYH65bqrfXouUH7LaqwEWnk3TpTFfHcpPZRGpcUeUaGCNCRSz3UyhH55oS",
  "key18": "34kEM7GYVmWCrnpeTfUS4DD15y4vLq4egTgSpo6wwK6QF7ci71TTXRa8RZ9zWUosgW7FPBB8mFcVfj11wjN4JVyB",
  "key19": "aSn2PhKbucmK8jNP4RZt63cddEVNYyeqhRj8VotJRorMJVmkCiKWK7zPZxcv52mEGAkb9cSiM1S3u25pqTLYuEP",
  "key20": "2QGPzY21XHiqhxT6KWsvDAUAiY6Qds5KZeAynaGw27PyeCfnaCYc2bKfvweQSbidqo3ieryX6qxqpqPZq4jnzGaK",
  "key21": "XNfnQLf9aLbaNamfXme4QVD1t8xJgaHvqfZ4R1Ayzfx1VnquX2yQsQsbL3jxW5zm7ndzLw9oQBkHY8qgNGYEKa5",
  "key22": "23TSdfSXLL8K8eADiDoXkXCDTvgwHma7PEM2kQa14oxYAu3ZE6xV8CaM6og1YR1hXqQbXWrZU98UoEk4DxDucXCP",
  "key23": "2jq6fJGDnEwEk7JUca8sEny1w3gtaRNoXdQ5WefnarhHwq42neT2xSt84Qxb49xAXFZb6QHaKWyDgR1wgDVsWr57",
  "key24": "3rzvy9Vu9diutHq22nYbqaWdGA3ikcmbrRGBoFUsDW8dfRGGkRmeeRhsYrkGyd38iuKjHwBehGQ2GrHfchRz5BLb",
  "key25": "3mtgLPq8EcUXjpQaN3MhhWhrNGKnJeSLwZMp9g54CizS7PxLY48n4c9jY2wgqgeLR7FnDmrVU2FC1d2QeMDguf5q",
  "key26": "4j1sWB95kSSEYDiavCpvKcPcEX4vaea3HLdFtpYx6CMRAdXWprcKbuBYX4YwnR2SQRNH9FycAWkaUpXjqYbmXXcn",
  "key27": "qi8tGsm5cuAUzhvAoHa9zFxGRJf3258sD16H6gGuxsw4LCU7JSWT1zorRKZmpGdYpZpRVcFHPx6KcDLjidTLpt2",
  "key28": "2JK5Kk8QrakF6z38jDjvjxuih56iKCebp5VmNyLf2iRYewqRNM9L13TVPHHZLm7afc1f4VNjKhiz3NT88xkkkuEZ",
  "key29": "2R833QWxFH3nuwLkiwUcbwTyN91f9VWASHazZtxvG7nfkZkajTDQxQwoi8LQQKfBRnsvy7Drqpgkm4Dzyeu39jRy",
  "key30": "5AaGMEq53FEURvLgpzMwyLaJ4eJUQRZn7XfjM2aKcRAFsq1YxwP2LCRKfLiotGXeZ3TwmWPaivQsLMMXHZPBB7KG",
  "key31": "5LfmYdNs7kt3vxbVRMBKyhUwPf5f53B8PiGne8V8ch5EQThDkxyz22LjWD8mvsmCRjhYRq4jdUuyERi41wLjKyUt",
  "key32": "G6gfuy2Pov4nbE9RaCyZ5acnR5PLJ2kHsjzAbMsqCADRRivAqSKN6sLwSHTtoJErx3FumDve9etbpNitKTrCCXd",
  "key33": "55YkyyDD5P49G8naBSqA7padaUnMENFtPHh7aaRsDKZLFynMRXyVyGViiVhN9YzH1nhf4zdh8hfcpDEZZTa4CDS7",
  "key34": "22NxBRPZpMJgTSjUtDzdxQWJ58GuwUwPEvB5mhf7QkWm4HzaFwEtPZXHsFkoENP6vD6P2UYRssKoynavaAMLpSCP",
  "key35": "25Vrey8549TLEjmN51KuB53TRtc8aFggDaZE9yHc4jQ8JPnHoV3DLdQMDJJFSNoW46fC5S4x6FybSVkQeeg7fffY",
  "key36": "ZfSVBUMmUeoKE4jQ9uKfB5NcVbPnFBUbrKNXGnbDRQD1KbojPD361woqTcrMPpCUh2tpeG1yFfBdXNTSK1sLJXk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
