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
    "5UZqKSMKeSJ4L55zRQjz1waLvAZBiT8m32EyLj6KNE2boiJJ3R5ex6Ng5Y3CiQ6pXwJ2Vs7vz139Dbsk2kZVpKrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uoLmXuHwwWH6TgGj3rFJvJrzkxCEVbcWjdrhKw95gpb55bZNP9cRZib6bEHsHAqfZFxA4oqLFjph5sWGPhHi2C8",
  "key1": "3evd6AAtitEi63bmJREtga2dPEE5dh2Ln6UbeSbkDuP3VN2doqyMn9B3P1LvQfmXBwSDGo9PLqY9tRne3e18jyjP",
  "key2": "5QjmZfax838GRXby6GTfgm2gqi8r3oTUB3Qaxue9bXU2zDorGMDfZMPcPxuWUVKKs8Kwci2s3dTVbpXnoxvuLZVJ",
  "key3": "3FbfiHobY118tt8aeHG81vtxYLtkpauFx1nNTJEGbgvpyRnTWTXHhDPFrMspsFPDi278YRnKFc91UotAYJPuwAgm",
  "key4": "5SVPxtfJb7dkCD5949UR8uPgN4MtDdnMVNRZQKNt9YsncjGivdKERYD1SBaFE4dMuvLnYZXYw8LyvG1CejHuu3ZB",
  "key5": "5v1poZhzkJ2zYcy9Bbui4mrvx4pLt23YoCq433iLRYXzpGm35jhdKhuxTNtXBdFv8V8hncp4FMaoxrDC9zYYKEjq",
  "key6": "31sc5virdjLLQ8pgf87FUCvyysFeVmcSN1qSzSkPg1BCkDQqFyKdwqXFeER5QdzhSXZNuo8E3a6mGTZhgMovZcKx",
  "key7": "4GcNhWQHM8Q75TVC9a5NyCN1ziu6N5BATokpnLtsujHsbPEVsuXQNyiFmq4uxvKwGT5f3NcFJAWa4YZJMhwHCoCE",
  "key8": "zTexBZ2pTfgGZrTdUU8RVW8iKoJLWfjn2b4uTMwm5XF1DYFMZ5s561ZdUAZwxZjrHJbzntadSgX6QW1nVuGxjCe",
  "key9": "5KDv7M5EBZ5k2p1EsH5JAu7WoaNBnmccceSTW9pWaEFwQvwrFunMnxaLVSHjqRZPWZhyNzrRSAT9K3f9gvF59BxY",
  "key10": "e89niQmq1qGcMPVJZmjJ6KxXhsH2KNcEqhXLGCCmGGja1Yto1DXHV4V4GivPA8uGGrer2nXtfDtCGx19xGXUDLM",
  "key11": "2hdEX7UcBxDFwXUMN9qnyKCt93dgHfLUctcs6s9PcYsoz8Yd2LBMPkK8MUabunkUm56yVYVm5jgEZkiFjncnqgda",
  "key12": "dQkwg4iFXyZZjxymvusTzEPPXpcSfnGyUcezdA39r5N7KaUv4aQ6thyfCysaKngz1RjCvxhzmHBhBNhmRNJrdLq",
  "key13": "2VaNLNhHrbY8HtS1sMdvkQHgar52NgmJ3U3tSXXtrry1gUkamXfMsbKMwFERPJ8DZXRaVCyJULxzQeqatUWZ7TNV",
  "key14": "MLhCoUXACPqSkKNTRAX7HPx6J9iXuLsEt7HBXoJBhfK4JzRXem7WppkZP5JixyHrxEcKSwpD5Wf9FG9CyepSCMe",
  "key15": "3hqqHBuxt3xAbPvohzZR5xTF9zsjzqWaioSazcEMCjxsricRCRfvjr4LWAhnw99Uf68ay4qEUPM1SHpF7yZFH4DZ",
  "key16": "KXTJa5wRSHEpg1Ly3T7vyQGU4YCkDJvgLcRwidpEJCaBW4QzxP4pPjwBLHUb83DF8KyymEdvrK8BGHyqEnFhQgb",
  "key17": "5baEi7uXCWR6jRLxah9HD6uKWaHjfHdLRkRzJQKJ7gCNQTHXFTWZ4iNWHJ1MaVfoLe1JkoG5QU3eBxraRKrqY3G3",
  "key18": "55vGzr2oQxGWEjs1ykQbLh6C3E5HzH8iUXHj9oLrQBvkt5FDpyetq76EQRHEWbc7hebgjV3UkmQA1qFuSMpWpA6t",
  "key19": "2Bf8N4J8ZCyKBNAPDVLHYxXHGJBTNZnkkquZU4GiwmDJtWcqYDo5McuixzsVDgwqZjsQoqmJj4GukZKoHkXhyUE9",
  "key20": "3gpyqhooBmZtCh8mcxU3cTRCrbyc3VjnnH762mWHYQ45YLv8ayDZ36w14N3mu7J8uHkN4R1HrisoPry8jhZ8vc3y",
  "key21": "3f5hpLcyqHnWENZeUvk4VMuHzZwUTEEnCgwzPE3vw9Qjcj78sK3M9CpARQjNUKCwNkJaAA46e93U4NW2M8xEi6Ea",
  "key22": "4HiViJPiv3xKbeAnhsQLbSoRaQj2KdiH3PTZhTfWjMr2e3zNG2CHGw8LGHaeRZyypKnJbC2aecSSAik45Gc7JWv4",
  "key23": "2Jz9S1KHCJMXUf3uSReFp4Q9o4UUcWvZrqrZ88z9g1KejnKzr71VzKjmcxfDL1B1vPdmmfQag4GchTYJuFCQuXwp",
  "key24": "98yEACQJrkhjptpKPvoJWDiug5bRFfnpSpixff2qrEyaaFFGH1drJ9Zww8fTCBfsK8ZnRkVqbaR1A7xDeLeFc6R",
  "key25": "5yZJXh8io9cpLdUrXxxMMZtLY1VG99cEaquyyW2nwhTufVNx8eUUeiLub33gDyK5Szi3NxWunY42bvAncfJQJEHj",
  "key26": "jzLhwU1EQMpQgSv1xSDA6pwLeAG2tHePY56Kkcg33ApnCQsAafTWB55uW2do3JSaP4cgjWPM38pAEvkyTCTnKTX",
  "key27": "4kNzG9rnU1Vywpwav3LvrSnePoDA9yu53qCZQwEeqYDNZHCu5FTd7vfddAaQDV2gfNb621M99LpSgorrNJSVgeXC",
  "key28": "282JEfumtvgiiixhZJVmfBdKER6YE5tQdHWYAhQM6NRWAFeWx5hnhSKzpmtoV6bMeuYEEKaRKDiMAsKCrrUo4gxb",
  "key29": "4ccRBECziPAcqZVeCp255nBHvsguMFLgQuWPgfyExoBBVVZWvQYYvW4udACh35VtyjxakL28F2QZqzKw4nCZVj8u",
  "key30": "4HRs4z2sj4khcQ429SJdTe4F32hVRxfwnqtXUWuo6xeMzDesVz8Nev79NP6VLWpVehxsoyJoSe7fNFeGKW6Hsh9L"
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
