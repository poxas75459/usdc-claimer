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
    "4ciAGdxWVLmnfLXzvj75VqMXbBwgypfrq6Qgjp6dATF7dFRgfdjDrae6jjySfQNCCTJH7eDZn9Uq1BpFDs2BkFqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uZpKh4S1zJZcWeVo93Ej7HXXY8kRpnTA76un5HC2eBqdSvyFJ5GAHSvNnGryM69ZEVnDnmXdrDide5XqUFKF3yT",
  "key1": "4qkmNjsQ5NTDpqqRrbfsfqcX78nRfbzBnh1iXNXKEX6V2eMSccPuNGCEdbtBd7SL8JmrRBboLhikcgVJkfAPDEWw",
  "key2": "5p2RU9rBeW9fhXkspNGC6Lek1MfX2Z3v6DXvj51GgHmydXgKa4XoYbA3B5YMz24kfuhaB1hy1GpAAdT2bB6Tviqr",
  "key3": "3LZFwF9LwexQgVPR4ySPNPrwZ9Qaq44wvfWaVLKnh8p6kfXRg4UnUxqPYhs7wsSe4hL6Ak7XAwfauD3b1FatWoU5",
  "key4": "3wSw6YVZXmAuHJj49dXcQMtinTyD3Pdt4F5ygVPR7WpoHH8VGnKZbUyxnErJmRKrDV3cGsTWyoRjsVJuPBCV3Vgn",
  "key5": "4HzAuLUqSuxUQ4C289FNQMbAkoD9F9GemvXNvoNSBYQqsCZqS6UgcHXe82zX4iAJJ758giA8Kr89TnrJdBqpwMAx",
  "key6": "5m1V9AiCcSP1mNYGLWZCT39ymQcPdx478bwmRF79avK6xMygH8fj6C5budaob4UEX1x7BVBtydASDugVnB7S8nRN",
  "key7": "585ap5tQKyKukdgbBy8tvvrpaYvVje6ZuAoEDkXjs66XgW6DvJKNoc73TZ2TtcgjQRxJvK8RkVBxi3TNgWhA6Sps",
  "key8": "2Av4RGYLucgYsheRArGT4tnd5ykc9bJP1MXiT4LekPhTn54Qx3ocmEetdweS2boXcCychydRrV6GUQuXt5E8QSvf",
  "key9": "4bY8yiaGWPQEXVn2LK67oBEUeJgcKc52kzMYLmjHZBHm3ah7bUdjHXqYik4YcTPhu9EmfWUfHweQBkcQJWqijgRi",
  "key10": "1PDCeWtfjHuXEPzUPg5BQVh2gDDc1K42UFxY4YBYYRuJfRdpq5GUtLspJ3LknW8FyARc2fvUtZKnTfjTbQyDxeJ",
  "key11": "emCjnFnfVJkF8KifgiLGcKteBtiFPMHNgvZjJQjkrASs7Zf8QTmT8fSJEX3DruWEKbi5yg6H43gUhzaUY66VE1B",
  "key12": "54mMJHwyHzSWjMUpf6YcUaEA2uv2YN1VoXX81XhzS8pLhJ3sejTPXASytgefGBvGPcJv9nrmCga4o4KstuDXVYzz",
  "key13": "4bWM63vgxHY3GVZ53TM8JhEoaWtosxShWRfmNcrTX2iguZFTXPPwvrEjMseD7hnCDVA8prac1ZNsarMrHq1Aovrd",
  "key14": "2ePrVrAp5MB3EhuDc6Y22LkTmwFteK2kidkAU3JViv7iAVnye9gQ9fUPnSbTyjHRnZtvpwiCXVVJErH4CQLbQp9j",
  "key15": "2kUqDAnizT7YkGBViQcfDgi66umXfAQRtDvDYbgmaicZ2TnkTkZWJfz13B6aWfvWZzRWMGnE6ja5cJ7CzFq1PTAm",
  "key16": "SJQUTmhfbupYUjqHoBUCrBYBFE6MkLdL6hnNy3ezzoFisrbBGYJfUdhs7ZTMBn5xQJyADvDvQsMBGbQMN4fCJ2g",
  "key17": "wKJEq2gBFgBUpbvo7TZ84QGwEhFH3iHESC2dgUDucAdWzBHzA5kUNCMYVEBTzDvdsDdLUsmJzWBVSZ2aVaK91dg",
  "key18": "5KuW7fvkMgnPTfeErX3ASYeQBctVGYJfC3Hh5CNuMPhvnTAf4woAn5g493eZg8ZxEQq6rBpQKEvjAi6h8BLvqW3F",
  "key19": "2H21hHBvkp72jVJHJe3S2irMD3a2rro2ubTFfMehtCMhsLNVXwUKd5MyYgmJQpDwT6Yfg75hhppkcMnr55GjgdWm",
  "key20": "5uABbR49uxcLE5gwTodjzEwsWA7pNgBKoGnvqozFhSecFTPMdsR8d8ekJRfBvJRxDDd61emH4P8DmWJFNcwKJs1P",
  "key21": "qFwiT6PvDMxweyPStVZLpSw6bM1vV2NPifqh6nNokLJ3YmnYyRhZ3Kk77gahMG3HdXVyopYQU3oQHGVDpUMR9y7",
  "key22": "5KdQAZkRJhBbSJHUabWmxnTgYXZvyXi1mu5sKRyCW2vzXNp6MSUYS8HwjWqnNZQQHw5kzVJfzxS5NypRpcqi1mHV",
  "key23": "3PGwnrHWbyB8pxMbxDqtt6bwcsT8hYQWzaSrErmWLaqbSbbxNH9uDDYU9g4MCxPCL2uABKfcffwHmHJiyk5fZz4V",
  "key24": "2Kszb369WzSqx2V4ZcbGuGZYUTELdsoFiXAacPwPaDbxf7X4C2MNVusaEivJmNhqJjAbiTpbEA3z1zKY5LPuPyAC",
  "key25": "2j3dDq2iXKMTGKNbwnfBdu7qLhFHMybBthbd1Q2km2rbrH3tniSD5XN2VHiDJRoFFUh75DvnFiRjjheDjPfHCvYh",
  "key26": "5Bk9anjYHJsiUFZoX4dJXwSguPpE2dxtaZxpHVXXK1VLjQLZgiEpSAZsAFqAtNEYd1TfreXmLTBTwu9LFDkjJqPK",
  "key27": "47jkVcQGJUA833ATaCJ6i9DabNkNsYqinkTzDjdxQHvEU4xLFkP8GCD4m3ahnyCdHmtzsvHqeu3ivTXfmEJ33PhM",
  "key28": "5ZwGbMrGD6cHgJQKBfEy53tR4F21twgG3Wow6TRDp61mPsBFAnVf6AaYnuKfnjfF5bNsoHHLkw1RGgR1aaN6PLtA",
  "key29": "5bTE7JBqYbkUtP8C4uEn9Uknxx36p74LABhuXQGeFCPuA141KirCvu6cE4UBtUENFQfSiFNaUhn2zLoNS8dHzvo2",
  "key30": "WcNSPSqqtNbDfPuPkzJxD6QQrZWHYhbGryJmuxnu9UEtrVxGdc2k3fBZ3RURTJobfn3BArxjiv61JDTkyNiHSEL",
  "key31": "61g5C2rEk26HN7MAxZQtGWvd11CqYU3MKWdRsskwdX6FdVeqGa7efoDdNxjuQBU5tJh9PeGj2jSFPNffyv2xEoCC",
  "key32": "2kaLvMg8F1uAmASDS9WicxHpCEmjDejhFhB5SxB1sXQE2MbVL75NVA4fHEq9yppLBJvDcyyfm2LqfwkGXhTYgxA4",
  "key33": "59G4QsJCrV67nJdYRnPfm47eTcypRX54h2NeDH9UcpK8miRFedkb1rXAMjpuGBMDwr1UMqd4TT9PR4JXZikhUbqa",
  "key34": "3B88C8F2ER7sAV9iSXidZgeiLnJJr1gm3DSjoDd3zoXc2MC8RyKpZhSqPHH2539s3fBygpYXyARzJSdarA9oV19L",
  "key35": "53hFxu6biU7oMYiEAQMNFqaRWDZS3mg4T9VV3NQdLCK7NX3QGYvP4phX7UVc1WcZJDMXy171NDaPHeqpUHTEpnxU",
  "key36": "2L92ogLkG58TSkbBuoMss8V3K6oYcK3m9Tjj8MwfBCRAfQ9fH4X17RPXW5icSdhtw2oGFnkkzzqnuMdvhPvL6mXu",
  "key37": "45i4vB5fkRtU89z6YjAvxfQg3tSoGEYd69tijEgThykWEDJ9dvpfWc9JcrwAXYMD4RgkXhqV3d8iwT8GvZ5Hu3Ht",
  "key38": "3FdzsZkkoPXUXNGaaBpqRzM4HcWFJKnbs2VXJhWkiiaqXKZAcTA2DwXBhhLn6kVNSQEyAoiehhAuVp3aQWg1A8BF",
  "key39": "3NvNy5gcjCKb2SL9qsWJYeLWnGEzxDoBhRd2gYSbu9Ad2HavFAonHL9kUDCPqEQktBSmAATbDEZuLddtdSBes2es",
  "key40": "GcAmb4ZnTugeDHE9joiD47QMCD5dEw1dvhEgWm7zJN7Xy367PfbqEi4wvxC2UUYVQCH6DE29JNbrDzPkgcLs5kU",
  "key41": "47YDn7ugx2VqrWNvMCw9ZnEUqGsirUe7f9tXkcrkJSLbaN56JCQx8uj6pMtvk2H2CDviNb4EjKaq4KxgGm3DUKAR",
  "key42": "5oXrzMBr9ozGJK3yk31vp2HrTijZSTM7ASko6FmQeh1jkFcaU9jmXrJmb6B4Y4S23DwRysZyWtGwvnw6U8RdMkC8",
  "key43": "3rPGJsAJiDfhQ7SyCQejQK86Sa87j94f2Rd9JRp8asi1e1xaNraLaZK8rFgDrV7QVDHXNxnLZRpCkroJQTCUi3Hu",
  "key44": "X19PzvzXQHqVaCAHqb7XvAa5gMQYhEN88pomKiyio8XEfnyDbqEzXiBtMySiYGSmNQ324ynoJ1kRVdBPkgQ7iJ5",
  "key45": "fLr26XPpgEMTjqLJXXdUsqAosYSNT2MJFJsCkU2R2gkv9GL59XMNYu9Kj7sKvQFW3PNBM5vGRgswHjdSArqw1Um",
  "key46": "5hZ65g4Kjjit1BidsRBNec7Wm8akLDRHJ7HowvxBQYbwoCmHAkDSSTsDQvxKd1Vcn2nJJNvBbkjZkxSUtmUh7yAs",
  "key47": "2HXsYRazc6KT6RZLmS6zL3CAmyLgSdo2e157JwWXXw4XmPE82F66v1bk7eHdP8n5ECSgm1kMY6fx1fEAyhkhcyZR",
  "key48": "2sykHVm9bcUaKA31vnoQtH4byoZvaSeZtRy93ZGkrZjSnbqsLHxgLjEJKRx5pnWKkocvbCkA6eC8EVZo4JoxmWuT"
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
