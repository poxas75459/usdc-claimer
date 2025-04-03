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
    "7uvLJ3bqWfoVqWbBvEV28JEM1KcUyqZzFg8pQ9rPo5hxChZGpDLsirGhreht3SdYg7jXGwbn6wfzzt9jzizR2CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4sfGxofsigR6itTLGNvcXE13KQFPvWR91n1knPAcnE7UqbzHdSBk3ekjwSTW3yHU3FyzmEm7Dig6ijNBikHwPE",
  "key1": "DzMrjRoBJ8K7FQfDsipTuykGUa48AEyBPGy1wvyFVt8kQB98RfXfD5gVnU1jSAPDSVrxXzcE637yVhAKJCnJXAs",
  "key2": "3Eh4kYCSNtnCrMX994uC1FMv1w3rsnYRRADbHKyFVNLcRKNPUkTjKMZRGpDdSJirKAb9o8PsopYPMZzHAuqRNQ6f",
  "key3": "2dyawKyB64Qp7i6LELAsLjbCxsAwv8VbJK4Nig9RYJMiZ5zmxupmZFkcavry8xRzd7XVmrtBNFC2bBYCB9HEuL86",
  "key4": "iQmTttt4cxg6gK6zt9VHMiRy1cm7MsjEwjLYbhQPdV7PBWqgB59dB1bdMa7F7VtSy3DQixyGheeRf487yjXvL5p",
  "key5": "57b9WjiBxJUPyaNMnYwmisnyeF13ZEXvoNZaRsxxqU7B2fkTUMLAjLGnz7DnfcPgy7ZDw1LxzTpfKjD4FK48d1aT",
  "key6": "5pydg64A1G6oS2JXx3a4wSmbxEzuUQ7mZuMMchUS6LprMeqdmGLkMHG63QydUC2sP7F5nLYUuBfWk8x8GYNTeVAY",
  "key7": "45xq2ywESAMm11NupVYmU3u1TQuqPVGgVQp8WrXYnbTmJm9P3Pt42P98vb8eQDcC26grSMKbPy9jwvNu5F1RhXGF",
  "key8": "SBqqiwhRZysxsBwz36VBr7PqWHYbGWxwNWrJcCD2a334PRsP9iotmYYBq6YiHVV7UCNnVocoEB2hNtRdnY8ioXH",
  "key9": "s1rgYXbTxMYr7egNnsiweCNrjjBQvdj23mNUkohmfBFa2BdKWMUPrD2M7oGNyrFFq2CaGvyZ98C4HRuqrzrw44K",
  "key10": "4ZRJnQvgFmGzXHC46sKx6pEBe9o4GmwtuGEh4xujnAN7L8hTkzfkoiX3qsysasPr3UyCCv7PCxSWuC3dKYiTJ8qG",
  "key11": "5DxfoYs34pNdiHaSeKexAWFgtpTSFWL7UEzXmmxC2Lb9c9ZfEkzae4DvZPDQWsBktrjusbY8sP8P5ti4b4ELjPp7",
  "key12": "48eHG8rKnMzvWegLf7xmToU2UgSk33FHVVW6pQ4MrwD81GfMD8MRZScgpfPHdSTbSNaWvxcKTUS17qSgozzf7pfT",
  "key13": "4ZPaRgpXv5rAwQ3uWU2riEbv36AUzwyQYDvyxq6ZyYEat47VwhWaQct7KJhBkipfNQAqUkvMFbqhH3B2pKyUF1Dz",
  "key14": "9yD79BJY6ZzHzcxCnKnNE94o9BZjBco9VvX37tyCmWgf9VUfQ6pU9mnxYN6MqK4pL4JwhA4uQ1NtFCXkbBHf2dh",
  "key15": "3LxUuYcMjEtYAaWbkYT1JinFTaRzmeeV3eFCp95e9FR7ebFhYFbTn7tPQVHcL8q6kr5RNwfd5oAQqXdMR2oh2XJh",
  "key16": "5zjVjfUvLBjSNEJQzMWXHLxo9FUk2pYHDRHaBiMUitosrA9SgUcmKjNMEKbMwWahMWjnQoN1hxFwfdv6JfCs1byi",
  "key17": "2aFsugEjRWrjLAyGBEea5ZxsKEXuNwwHPvfdp4YgfkniWbWnVQKiq9LdzExFtznHxntVi97UEGStGmzFXWGQZJTc",
  "key18": "FzVYzTUJKeXLjcanannbzD2iWPeLoGc7a2fbQK3eLRG3f72hpPDMkWua8b5TLTh3CZwwj39aKSnD412cHnUYSNu",
  "key19": "3rfkvB7Zi3CgoB4PHfnDXWxWw8ArG3cwxvzGSBjB8HC1qAsXWKN3pdeyZ9VazoXF7ExANjzmM8vJqFNuTRDb7XE2",
  "key20": "5pxi4oSiLBWfTPbp4nYkzajatnhu6i8L1B5dvt258L9cPGJkUG8RLe1eWamHhXj6sSLkpGUt2UxwxPsxm9oKRjoB",
  "key21": "35fnRjPqi7hYGF3tTedCew63ksRmptZAmL4NQ6zBKrE7dRswuxavLumafquZQna9nynMfxPxgninhqt3G7mjyLCE",
  "key22": "5t4RDunSgcfvytLzeHWwNwdqpUTUB7D7V54D9T2VWEYgxJcLmbcoUTdBskPgdjEfboqE6gisY32vE5w5VLk1vHX5",
  "key23": "271uShEV2hjNSp8Q8Ddqn9Vsv4vdHnCQ5jGov9AtboFo8SSqfWQuBsxXQJiLERVD6QaNMDw6bGfBqNG8SgnR4Ej1",
  "key24": "4zVngz5q1rTJdqdh8xB1UWrrgokG2fjJumk6fJ8amGS42iD8MPB5TUHqcvZzFucZPKoGsisoRAnumumqXGftuSVr",
  "key25": "5zZYinyz4uD96ZNHt7ixVNctWT2H9PUAohDoZf6KQLfQ5Lbm7sy6yvNeGDoVDN63fX31LZxR5XygVTn7M7ge8ZZi",
  "key26": "36EingL1UEiFdwHic1r59KV7bZsHhWoHsAwfjrui5RDPyEjdYAvYKFF6awykorF1CP9Ymw9obMf4MMPCKSCbDSAW",
  "key27": "5ziWVnzKh1Ge9kznTkkie1dwV2EYgoN8b7oVH3npp4iAXQZoRpcPygKjBzafC27Nyn5sSez8gr8XiLrKcaxGyoLz",
  "key28": "2PjCB3Tm2oZ3owuedFW27pfJ2RpKZzBqejadidgrfpXXV6WZ1Uw7pEGhCmHpMy6TDquRYJ4h2sBknfv1h8kD6c9C",
  "key29": "qeqzB7yGHLzVaxGQkEY9SCxW9vJpRmkFw5ba7GkbA7Fvo3pxguddJAvr4a3LmmKHWvi3hbAELqKTSzHg9oTV1B4",
  "key30": "2jAD89UYLmzjEfJWTUmaH7tVv6MeMWW57q581EnfJuNc193SYau47UQHNKJSo7vF9htatPB6ZjThVoz1xSwXNWXJ",
  "key31": "57aXE7awqLEG1DyxXGkw2p753ibnPegdF7jUhqCpomsCtz6gGMJgGnN2i6oY5Bk3zxkdtwBA4FnNtMkdZ4Uj3QjY"
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
