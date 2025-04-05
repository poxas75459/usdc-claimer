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
    "4hfd9AyQnq9SqWqHH9zuyxm17xYuRzNicbhy9WnPRh3A9qy98DzBFNsHCeRLrDXu4DVFAEK6xznU8kRvW1Qg4rDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CadjaXRLuNyxRodcRQvWiUf1sx8zHpRXFBAjtYxVZpScn2wWEUu5tbYchj9NMdA1Xbt7aFs9iQodU6FQtUDKx71",
  "key1": "38YzbSuBUMYn64zkgpaWWCgTHHRbu4YU4VytX1YFKaCgUYE2a8f59v6WrE8ARYJiC888oEDoZfu4LjqhoxzE2inh",
  "key2": "BFjxCycRohroo9sDLuKG3BuzkNkuEKdEVLKRrC7RDV3ad9zJEeTzXjkf8HKfVJYM4g5jfS2pcPDBYmHSFQ3J3E4",
  "key3": "2eLk7wswVs4FmkcsgNLoBiGq2qVZkfgQPCSkWN5AVoh3ZZ6xCHfhkfJwyosc5xxZKEebw1TwVkhCkQSCFwWT29gC",
  "key4": "RbDxYZY9ZXhhEAu26xf9EdKq36RxDTmNSJVY27zbsbxJWBSZpkeC4Wdj5QfEcajsSPN6VvNCz3EJenQTR6d5y5t",
  "key5": "53nWBjEXaBqsNEj5RE63guLfWz7JJm1Yt8eyT2WdhFGPjNbEbLmpdZBGAgPUQAn5sUHzxUpeh6Vhzz4hqYBTtLAc",
  "key6": "JinhTuMknqauKuExskjBveW8NbiwjYestoCTzpBEz2AeV1Uny1gypAgXhGLQjcJLD59kBWMK3KavUJ8vdKys19M",
  "key7": "2LBdCDTYLUTbgVzBXvAvNAnGsFjRJBgZTEmZHYy17ewaMGd9wSECuHbxvkoo52pKHaZfzdhUyuxSgiWfctr9vZ1B",
  "key8": "fHPyNYJTNmtGmR7GdyNQvsCYeiu11w6rTJXHCtY3538XtFB6PXpnmHikxg8hrjh4PrNLNM9ggJNuJJJM7bbKzFR",
  "key9": "yoxYwrXonVh5LRBwp1wb9zEJyxoxwSRRBiCgizR4BCn9dCzSJtRSW9bULNtEMxuQsMMy3Mpsd5GBXMC2C3Kooig",
  "key10": "2Zo5TghH4FgVwKcNSCdJFLaAR1c3vnbm2B4pUixEmCywAb52uAMzgKvpAe8uXhVYVEC3JWDuxW1gkRUVboGVSyH5",
  "key11": "5EmjvGgNpz6ipJPpFHHEaoxAsPwFddhHCs55WngPuVjKo81S3RdcefNmce3xWGxXB6wsi8RHoAadyDCGLCTJ2rPd",
  "key12": "5hYgTUtXiAg1ptzmWHipuQkmLbA33CPTHeQBNx18JQiKj3MSqrjoLuyU66AHqryfEGxCFLcBQER2dhAM296HdvKj",
  "key13": "5cEXBngE1FUmXsf6RC1qU9dVcJkMFBiSvg658s82WaHtFyWMaY8W4YcESXH1RWmFG4YTDhmdv9RxixSCeK9MTf4m",
  "key14": "cDyMBgzaTfZLmaNBMUsXDnnSguHYGVynsfPiZFubTfAB8acjbqPk3U9jKsPf7zodk6zE5neN1qYZX19fSUhKrzV",
  "key15": "59hzv1rG83izUy5WaXvPxGtHFx8Q7c4EmVVf13Ft4haSrXqCDfzmne6HHK8xShyKEoWP9tjcCnUM7YGDwsWMw5pJ",
  "key16": "22vyWeKDanqjB2e7sKp686Au46MYjzfgSRxmFqJCaJ9vCTAKdtfsCiGpWeAw7RfHzBakbVu6Gw5uwAmaij65AsYV",
  "key17": "4EBGstMda2XkPLi1NjebxfZT9a4DJ4es8vuh5jSojQ9815TqtU21nRtbH1jhaisr28sSXyWSZkcJ269N9dorQSry",
  "key18": "5oufHwig1X6UbHP7m8YVzVKGTyi1LG8v1PRwac1cp6zEiRqJ4Ro7EycDhMSnumYaV1mzzPvw2KJUMw59a5qLxnjo",
  "key19": "CSRwZHE71F7K5Aik5fJDtperZgbFMBMA9x1wyMwtttdcidb4xRAdT2mXyXBTnMRZCYUqPh3JUvGBtuiZHExrEoH",
  "key20": "4SpEwhk2ox8kWRVPi443jQ4jSY9uAXS8dKpJP76oaprBs6qtxhhy2BL59Tvebs9aXusTNQCZs9ACR7Tj7KiinuNV",
  "key21": "3C5UPmmzZ8uHDfvJWM6FT5sA6fCfMTVTNFXRYM6U3JgUVwoo6HUyx9Kvvi3ocNCTxi71sqKt1TfmjnNUNcKpKgx8",
  "key22": "62JjGoY5KaC3nfsfwWeW82LLM5g7njRrb7yvcubGT4AYnmzQukHaKqgjwgwHPJ6cSzA4fJqoWcaxYC7iKiABVsPZ",
  "key23": "2X3Xu1ifK3qjYKmQ9xwmGYjYa1yQxhmVKU4pS7HPchgfBYdDThXwqE7AUtYsC27Tx5fFHoEPunB58zZVtAxNDfb6",
  "key24": "4nsXaHEhqrxfyfNfVK7amQwqRLBewW5zH6h1uccojSJRbGaJG93mdcyh48VVkNdPUfZbhQGsJmBJtognYo1VdL9v",
  "key25": "5Ao5xjQF6ZQDZGV3mtj1AFYwvQ2kwtuVH3rRh9hX3EwqE9ArGNK7Xr9TndPfafxzxWUUW65j5L4WZMDVe7djWovn",
  "key26": "524Z82Gg4Rc14MHuXHMWT3c2nNJk7Typtc3ZR1X3NVUbus9Na7NSyAnvsnnJxN4UE7zBLkgM9MEsPtYaobuhsH4N",
  "key27": "4ohbKTJrtJeCw6WyRzmdUx7peXaDuum5x8SfyfLdZmfcKwe6Rjt9kpCESVLvzbE9keqzYZbWyhaN6fpqkDXpN9SV",
  "key28": "57Kxy5jhf4aghysyHRhExFEXqAP8CTkLEit4hobuds2YjC2DqYHMbH8ckiTxY5qDkDur14BQBxfxRowTQoUPHiGz",
  "key29": "44RiyrhtL87xpSZNcMrA2wUQN17JM2CyeNrHbZGYiKWK1SDWBjDYBuhZxrJZURnRbvTxFLtVrspRWowJ6ULyjaSw",
  "key30": "3zBGBNcLiejiM2rBoD9Ur41SfEqL6pEY9ZJ886pLsSjZHe6dZYhTGkXL3257b8BuVTswoKvJkvj6EViKiKHepp81",
  "key31": "31szW5gH6YwsfTqijzdwfAyjxE8cE3c5rp8fi55eWqLDRaC862sEX83U6rCTo72AwD7dfUwCwkWtHzKpQCRNY1DZ",
  "key32": "4ZPvmTZaFTg2cDvabVxHaEy3VGTuwHw8v6ew1F67ciz3QyN8PQPEircuPyV9Xhthk3Vt35nqZaASADhVBiMLHVQ6",
  "key33": "436Tj3wH8owz59hj2JwS1Lz6y5c68T7nEa1w4iVMufgfTY6rQjn6bhaee3hEMNJYpHUoehaMixd8no6UJ18vpQ3D",
  "key34": "qhrWuv2D7s89LTpyoiRgX1wsV6qLwHTaR9k2gCQJyKDkZW8bzfKkWWrycdM7pJTw2Wp9eHQ1GJpDMnAy5nPQWWY",
  "key35": "2gcJkraM7MjKoJtw1LmDfEMGMfuiH1L8GHfnNExBvHFXpG1hwpQEzaPrHPRmfiQw6idpqGwZCZ82uVssqvX1Zu4U",
  "key36": "2BjX9z3BmfDcR3hJBsuQ2ZfmbW7QJzAm5nvoDF26FFqEKtqYwruRnhUFhw5u1GrW8ipgH7ekvyT4JHyJ88RE1iCC",
  "key37": "41dWAsyePJ75AyfxQ8rKAjKW8EsorahMKSzeySGboUqmnGiFEPmq2u6g9koCMxrZdjHjt7UrpQ6HVEthHUHaZYSF",
  "key38": "2CDF9Y1fYHexxBjfPf1AX3Xmm1i1JhRefXUVkAowH2WeRR8PHfhxq6w3mVKHxqipVPFNFmH87DzGB9PKyh3sGqYw",
  "key39": "5E69mcfokiEyNEXQYVQtrV2oHKc4i9u1XnJ2GfAyq8WB6A4kwcmWNdh9KwbU9BCUKurg9Lanat9SUhHNAvwTmr1U",
  "key40": "4Q7FhwnvLRnaRQ7pKYgKc4ELM1rJAQ8tbwFWUvXt26p4E5tNhSCbX1PTnX4qNJRsNvdSBrsKSPmsgAhagBQiVGZG",
  "key41": "HmbuLwycocPu1rBY3DAqHUC6GJAS7RwsJqZykSjjMksAspiqpYUSxa4zfEVs9X2mcbtkXzV7NzYAs9MN6GF5NV9",
  "key42": "3rqJixZHfFyQZH8yXUAc29G3eQ31JfWuneiCvWp2bag17A5aTDQCAsZzxuyYGnFwrNcr2xyMeuWPwH9PEqn4FVzc",
  "key43": "4gNnRqo2mPBGt7dx2tkHtpRdVuU3pGCBtYP3c6zKFPxge7qYg6oSRUkG2aCC6PetwwrCohtZYvy5Kvw12BrvDnGH",
  "key44": "5LPzRQnqZjJ34Fcu5hvttxeQ5ER3sDnYh16ArF8oczhYkZbKQ3wWeHqtYqPzFN6VpeazfbsxyBnWER8kSMFzLFff",
  "key45": "4GJRcoqiT9Mucw5rLg5wL9NHaz9MS9Nh3945HF3gRirCcap6YzEzuw7Ddpc8C4f8aumGCpidxRyjRQdZVpGaW2ar",
  "key46": "5htYqcjkpAZwhdn5AXRTJJkGZhpRZ3tuhheC51rE8XbVrAje8Z3GPEcDBKityRTZpVJ2kdLRyFVPXqg7uebTySvY",
  "key47": "2FQJKaBCq9qTAumFLfDZthRLiJXPvRU1dkEuc8h36XCppq84P7Nuwioc8tj41qrsJBVkuxtuAetVEPf8aFVoAdxQ",
  "key48": "YYuDfFSG1ZSVx4VHhkAjJwFivyxuNq3tBtKrLfLmB2opkLSrxvmMm9aDumExQazHsnyfXWX8BS12fMrE9SA9d8Z",
  "key49": "2yqsoZAu6JxoL7hmZzKV3xuhCjGjus68yPZuFwRaNDfVzYMc57UAa19sdQTzh8VMV2ZeHuDPe53oBGS6EWdgZJfN"
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
