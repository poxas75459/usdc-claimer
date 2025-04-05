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
    "2kvWwBTyyFvgJwAFjdxnSZQhg28imQmnrBAfSnauUwP2FZJEAxYrnzRCFKxJUGYoiEaFxcwfiJGaCA9eEkRRUSUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXmCWF1JxMtQ2e8LYpPa2MpDWbXxNrMtWFjQCGoBcrMjQpSsPVUE2pMYHTiGS8Hks1fxsxs1QTshjfBod5grM4e",
  "key1": "3vAWjH75GT6g7hVh9vJRdZrTTY3QdWDynQggQfsvG5z1Ffyg9gjJrpUcVaGqV4UKGbGruWZ9B3J8YnGADQAU6GG4",
  "key2": "2FKcFdWkijSuaRZUaeim9fC56rCHhGcLUL5smyQQaSQbPDJJuAUvD14gJNvAABMsNiy8Ydw5VpSqyiroFe9DCRBU",
  "key3": "5kBuWM9sqfQSHmNCHfgzNbumzwonh4ZZjkFpXWPGhpE1q6HNgoYum1SFRE3QYuS5o2Jc98yPw12XNLAL2jPdYwhg",
  "key4": "4NSVDWW832hFHoXi7U5SZL51uvZymAmqJUgfuANGRcuVYZL3yqqdK1JaxTQ9cUNGMBhyczu8d4vBG1D8pnr2j2ZT",
  "key5": "569WvHiYzK1N2CqrxQGAfms2QDC1QPtuJEqHogvXgvEhsu54w2UW9aukftGY6wsQnq9mfd1Q1EsRV85KWS3gB56X",
  "key6": "5DStAYAE6AHKdF7idsxHjD1sw2SpSMavSTqUJjHY9kwczhfGa4CVzHR6reXJQFBkU48sLVpEo3vqTSyS7AuhSELm",
  "key7": "3nRRGLAj8t7126hFuU5f9u3JvBbuTgSeD8uUBPYfG1Fd3gNKmtLv285CbtkHj9d3pjLiqMiYjBBpNL7qWXezm5bw",
  "key8": "4qFAv6hSmAwZWkRDCKazYihqHPwf1mpSW29qaBV1euMYcSdvMfo1qkJrp1rfMhydUbrwWZsxQQCqkc9gDHjwFfRL",
  "key9": "5mSrc7k8pUAKNPpWZCaBn6EVJ6P7E6RYc9K5z9Tdezf9a21qNq53vtEPhdB9Y2iUzbVCd7RNG5QRJUc7y38xfne8",
  "key10": "4MMx5SWJHMnrEe1FWFSAHvhmDrqg6NqQm5UpQLdCtZCkEFePSSw2bcuYPiQnW5VtZFQ3B9zgVHz6kZLvZSP8DcuF",
  "key11": "fs1LQtT15fGieFrEsKJCW2vQRC2hqXuZTXxRW6fXREyoVzfq6QNW4E82ys7qDYjsQVcRQm8E6Cp73qc9QhxtiBt",
  "key12": "2pHJ7q1NY1wqV9sRYsHRSRxmDxmWbWwgRRbHTrrKjRoscC5JqLYsoD47czcHLgBaDCB3CgcuZVy6Whert7oNbhPr",
  "key13": "5WvXLfNZ6JqioNxQvJp6VnEPcTv2iav4hCnKh75ioEu4LK2wV6ZpcHD5uqvEAjc5mJ6CtrNsbTMpGgdJ8tZkD5Re",
  "key14": "4j7GZ8xFCxgPFt32ywZ2RtxewmQVYKa14TTebxth3QgDfcFPR2xJyj6kwKwnnHonWCeeuUHJN9aQpRLiQk1JbcfT",
  "key15": "24qPCZUPkQjkbZq38kaghkCcHbczEK4qt6DZQyZcQdLVbvJT1n4vSoGiz56Ldoai5AeRjKWs4W8C1WP3GiJCT6ug",
  "key16": "2Kyx4v4wBTQXPoB37ABq2PpGSdBiZmVg3XtXdD2qdYxcsA2SXymxKwJJAgddHyXuYdZcwhDYegn6RsJzoKJL5w1J",
  "key17": "5gs1v98qqT5Ze56wNXG8dkpRPdCyJN2kGupFGFKtsiP2q1J2o7KE8mLq6efXW1mTLomxxZM9xv1AYthq6jdv42QG",
  "key18": "2vYR9Fp27PMmBp5zrsK5LdrsDAcACha8S4LDafiJLxqyYaDTugkRKPnxQzmhwb9vaitv2YPujvhpRVXn7MucEBMa",
  "key19": "UcAr4cmhzvR8CKMG9vanU9opsyyfFZE4GsDgZ7e2gxymN1jciwafEdUw1yyR4T42WBfcctTDPvhd6eeVQn7jXe9",
  "key20": "4DmsiCZ758YdTeresABBNJbEC6G7nf4X54RMnkg87MyeUAomG7Lj2GizzgLkEG5pkDECZjTsvLimNAUopEAWrN7t",
  "key21": "2tbmLW1ouzTbwMQ6AXgJrcx3XNWxdTq3xjJD5YMYcB5ctM8KEp6MBtmXHBL7VRUkW9GmpUcBqPhvhjWT66uwUwbn",
  "key22": "2Z1ukr794TLmUYvftHPyLvnR7P7B3NVUSa43Wki1uHRErADAVmQWRJcnKHYcVYj6JG1ETRpkxVqiBbukBg9dw3Ln",
  "key23": "aeXbNHyBCEaTmpjtHbSEJ3pdqCiEEdtA9RjzS1DPman4Q5d7d7qhW2KLSTGHPZXxhnRGPfHgD9eDQHgvD1agegL",
  "key24": "2uh8iuMCXbbdKsbPpbSECejih7aNi5zdgCCBum7oAR4s8wAqfkrDVuMjCkPfD6UFwQspJPEevAJsUre2duCKErAj",
  "key25": "4eeZEcK8fTWffo7tEepRXvDncBQr61Gj9P8C7Lbzg7u4EjmWSaeG6pCAk38jysUpjX72QgN2Ao1DQ6c7kzhRFHMK",
  "key26": "4dh2XzzAgQ3rTKnmce3DZLafuuzM4CZwrvEAXTHbBzjQmhYpbE2Gq43u5P5UDwfkQXG6gnn4EyCkAAJb9w6epfnm",
  "key27": "5Pu63VTDqPhZYosSUTuGsRzZV7YFtHz81HpU4KTM5DinoBFNtLbLGHaSHwGzcYpuBwrc2dR9ERqHZm7xfNrbxzuk",
  "key28": "5QtawizVATcSzjHgjhQTXYbje68sqKviv8uKAe3p5hptyUfxHpAmtAdVYe13wvueP7PdpTseHPPLXRAc6JhhyK3f"
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
