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
    "4S1MAt2RYiUVvVuHtqoCU3E7ZbH4tKu991Vg5hJVkvbQEJAi4NNDx1ccrbHAoDEMPJ1W411B9GMxrMuSWpR2XBpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d4dQZ5nk8CCUyh7WH3pfMRLz8D538b1evD2dgT3mTqjYTucmMW4Ez3AEs1eSfuaSTyFTushAf4iGPbdeM5qTQSM",
  "key1": "2yk9yThPMoYGDj4VDuXfmNMXMiBkuScZxatnU84HY4KyJvKL4ZzTS7N24EPbLZGxsT2UCN7bRowP2BzVsPBeHsEJ",
  "key2": "5jKknxSo1tXHVcUnUaaQrYhEz9MSxfEVTPv2gwLMuCySwwFjctGYPVHpWn8RxeoHGbxAQb6Hk6HY5K2Zex7AEpCA",
  "key3": "3zK9mwddCy3NYxwqWhssNDrTNeRR2aLFfTa2XaTj1aHP4WF1VScudQkv5w1Zef6u5cHFjXbKWKC66WWB4Y4PjjQX",
  "key4": "2BwmR9zVwYgagN9DcGbf9uEBbVqNq84GSNyTXebB6EHD7NG9nWjJKdkTQeAMyd6Q2ySCYzj9NivnXCpFMYDknEPK",
  "key5": "2MusuRF2HYfPx4edpmeVBLwLeRAwmu3h4fsNjTou49Z37QkA7DHfuDZcY6SXh9qx7t7DGaLtywotYZN3FgAfTjz7",
  "key6": "3ptordY9Ck338gtADT3sdTY6J5Rwy4A3FE35ELWzanK4DKYdyjcsUEmZneJ7T6UMy2rmh2QtjmGVkdbUYSLy4Atm",
  "key7": "55o5oGDAZD7s4VX2ThEYtXWGUTV3gtYqPxQV7Ay18hPJtt9jVFZR9vZaCgvrt6c2KovnPW1bqYVDkjqVcQwdKtWB",
  "key8": "Wwzv5SAjg7eW8MsyEbKLt3GKEMgTagSLDtVriKfXMxqyXo8B6Qx8STm87c82nGy3GvKVrvMRxVUrcVsQwvwxoXz",
  "key9": "2LrZK1kznE6gAakdRjt29PoJLWNeqkVPVK1BBxXWUFoiTRKkqzhVdfWmTM1cK8ELdMmaM63HmVG9AdBAaF6G94fN",
  "key10": "GZHTaFXveqLNMXYeGdVowiydiNwGVg4HChqN94YHLKscZHNE1FRTDLPPK7JnVBHSKFfScfCDZss9aeRJKB6ik1d",
  "key11": "3iiMcJqDufkmy3JTjqQfuq4TSG8XCQZYHTaQ9WRfyc6ehHkx1WaDtUFyBDvoAoLeHUAuuKo1LdeHDo9uqHsdFqSi",
  "key12": "3gsqB76BcViowSpfC9QrDiHabx4oWFqWH1zQHSqG6HW4PCzsQbcmsfc8KcQaWy5QgbtmR2KPpQkY5nLnjSjNszmd",
  "key13": "vsHTeQZRk6FUmiY4rrZXqaLA1zcCDYcogcxZPvKRhexLG6Rq5YBSnSLEsAm6enpnxiJn7817JUtHLWHdw9W8oxW",
  "key14": "63hHEpKjFTocV5UhW6uXGfyzKupYeW4yffvseBGBEKcaKR8hmfACqXmjgwvoYWwGiFEs7Vtge6sk9b8hnbqfXMYZ",
  "key15": "3dthjAZx33jXQQ1mTch5wjoRJTRnwZhU9cCwVMZiCvKeTZWyLF8mkXhXpKAccexij8S5Zh7RyDh5vTDbiVmDPU1x",
  "key16": "4F4RMfhV8MAfeiTebnsTgMxR6Nwa4iHUFMH5Q31ETFAUp3Er44pN1dMPpHvFCK9T57Lo8m5tk7NVU9wFtJZeDrys",
  "key17": "5Nv6JWEd78g3v1tK8WiUWW8x77HzgFF4W4EZovNwNndwsENBPVyT8ueDauejRStk6DJgXLPE5i3DCTEgEYAdUaz9",
  "key18": "5jrg3uaRxwgmTzGMmuzaMQHdZQSgFCU42R8uPFH2mnkWvvm9LRvzZsDyyZpz7DBsy3HcuacHQSYFz4thLT7WocGf",
  "key19": "2Pm6sY3e13n98bvxHbJrsgKXuLohgrRdUHZnRuyrwU7dUHj2tZ7f1jDghEwr3nV4zzGAnjqBTPhD1Dn37hBz9net",
  "key20": "5KcfgX7jJputeXFyWRncgcGdp96op1Ywc8KwMdEHtLtwzq4gk2iWfiQJf7WupEKvD94k4RfUu9yKifBRP8uhr1Qs",
  "key21": "3NViKy9qdiP7zKFDLL5hpHUKZrer45BDttuQziXZLQHA6Qg7VPDDBGEPmwLCVRGTbb9UfpRuW2phM9JztUhKxLof",
  "key22": "22TMT2X67pT6cLdsYtaGC9FDXKsba7wX7HyeMB62sCu4JUUaMfGFHsdmUtPimKDjemo6r4oHReHCSpqn3f4AEA2v",
  "key23": "4MsGPdDgqmbnD9VfZ6mPk3uQXUEUVNhtV88buHSvPrBFCUUe6FDoV5SvpTz9f4cAphaf5gMrfeRrCFTjPsBr5iuH",
  "key24": "3NxNAFKyxMbzNwKA9j6ZD4mfPXRD7VbHMD7fyooGZHub6fDfpM2B2rHKMuTHj7K3ze3vymciAhKY1kAS4iTpXXw5",
  "key25": "QQupUJnuQrGmHdP6VdcDSVWoETc9xtniVrdwKFW9gwL8ouTdfsQhztVWY9Y2CUU4RQHA9XfeRKxzdUobso8iu93",
  "key26": "4FE49yGwxQYmLRYKgujd1q5zA4BiQZfiGPAJwvJAFZocTtZUkJS5DsqyzgoVWzYJxMSghepqGfnvnEeLi4JuCnsq",
  "key27": "4opTQJLRrgPxUPwtApFXhUz3hWYE5W6tchMFu5M4ovhKWQ4RaDuSHhDYQxkvc7TbqVfLLA6Tq9htR3kUJQucMELH",
  "key28": "stLZKkhUVPnQxbLYWp2wY9a9XqvpGF72PFebD5Hzzf12X4Q8bujCG2MscRes2Ly8gXEPMuw4XLQg6rUA14kCCSR",
  "key29": "2X9v6bpo65qapKvLkp4ER2ejBEmVRSq84QzjF7Hz4EgpRzadYp1ndU8FVk3dv3S57F27jCpKsnSFzR5eHracBHfg",
  "key30": "4b9e8KDcECqHmSDQE8dibD7VfcdsiehhigfiHCXBmSohPGYfRCj6hcaJUSizCMCM2frdAWusDnLuC7x1sgALFLHU"
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
