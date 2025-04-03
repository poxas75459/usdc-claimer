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
    "38uB5fixhda9Wsr3B1RtezT8KXHKYXPGe4w8fNSDSuxXvo16wzGZNHzbxZayyJTQnQDRwBRyL5AvzjF3swjMwugM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42TDrykhsqWY3xhjZ2FxodCaFdcpuPfhwwqbuSiEEwbW9zrxswJB9CgwAp9qDiLYfAGr7KdqyUJZMbh73iF1ue27",
  "key1": "yUxeRCpBoeH3LkK97N6xuH7Ef4to2TPwFfTLXewA2XboEsrjTzct5YV21zdBW2jKg38t9PMb9v9fwevEx2jwYVz",
  "key2": "66tNP6Ki9ZWSkpXNP972gXJcayhZLisVgEHUndHJpJpwNM1Av8jUspBtEoweM9kWBSvrWLxzox2u9P5FBpfxQdtq",
  "key3": "3o4nJAEt887pRWNenG5qkYyGchXpfsvqNUYA4LgyFA1Z2GPhbV8sf9tPs8xVPQfAXtg7tjydLvpvRDXSQrrajfbj",
  "key4": "4166KvWbAWsdTHCj7QnwxfGAhuEs6Ft6kUKfKE1XdmBvYd2YpE5ZVDqcAYUFricFu8jQxTgSbi54oeyAqJ9ah6SA",
  "key5": "5gQ8Mt2jzTVjrBz5cyGsBDkvJFU565mjyAnmkcaTX8m9ftHoxjb1cxhcxpYGdcw8u9opAP1XGHQKg78A9RhMDc4H",
  "key6": "mfu2zP7YTeW3kQWRzuAaZpa4QNS67vCahNZczE4YMZyKR4gTkJnsN6YSukRdATrmQp6NE2EQxDJrU6iggYjTmTF",
  "key7": "5P49chXDvSxEEurqfSj6Hx48tuhPLxSP4Nb8w34FEjzXZ4bzRyRnK9o9TL91Kfn8zC4QRuj4NENpd2J7XWRnm52e",
  "key8": "53MC2kZ51U1H5PRVQtHA3TKFXUyh9WTEuZg36rAPdy4q5UVCGWfcNb1hP3XtbecENp6SfPg7hEZkC6KgYzaoqs9s",
  "key9": "5CwkFDLHbY4rMSBJmQg2B7hz6EUvCXW7VAY9ogVfvLtQpwuyyoNqk4tJQyhPehcuUR8PzoiUT8CrfiuHZzCybkkn",
  "key10": "2hD3DipwjuyYkhWnn15smqKX5Xd1wzq9EJS2Z6YD2URooKEBJ2WTjhdhDM51iMbHi9iNwkCCZnJH5wbTj6zEh41W",
  "key11": "gnZrUyfJyG7abdVPP2ywAgYDhsNnk5JKeTYTUtWQgmG9qMFScp1vDchVQAXXLdwizyZbuTAqL3J2VkT4AvX4xru",
  "key12": "3nBCJ7BAi7gTbDMMuo1Nt3DMCzpweJXCvp8wYBAMCYUCjXvzBou77ddkbFK9m8hSTePA3D6oGUrvy45u4yNPvgGS",
  "key13": "4Uy5PzcJeJoyG9mD2jGAeZyEpWkqxYuNb7HEE8LnWSdMwQUADUnQrt9YJLdbxNojryCa5ihKVojNEyMdvW1CWugY",
  "key14": "3s93usha76yZgwo5qotLhFPWH9DS395AvxiBwqMA2m1fMo22BNF66qXv1dbYhMjEmjjq5i6a6PL5mcDeUMoBoim2",
  "key15": "2J2oLh5n2SQ5hpt77LQJ6YbVJRDrLeqLo1PurG9kEoP98NPvRJekfkXmTccyz9hcUXRg2K7DmrVMN8PUzyo1wjrP",
  "key16": "2xsEcRtr2Fhj8SKFiBnbRqANxKzK3efCRXMtv4k7sCRtT5QknSXfr3y9LtLFTSbULeeVw8xT3RKVxGv1ttaCNHtt",
  "key17": "41r6qFHPjbqXn2KeYU3MVewC6cHh2jCwvn8mnBDuCagbXtNsBCYrD8K98NgQM4BoQMmSBrsFJXB5yTiFPs1hV3Pr",
  "key18": "512xGFUfr6At2s6NCoFy56UKRBew9o7xWfLRrNRGL15ucc9QCHHPZAnbu7N22Ae9C1P1xgqL8eQ9HTsVDpgyiDRB",
  "key19": "bR1U3ZCQ2d1KarTSyKPiBSomX2hDxzgmjx8bocmkqmj3Mq1fCyECffPB3U9oyBj6YMDGnKMZjEbaezeqVChTBD4",
  "key20": "2s7Ui2qC1Qr6ZMW6BrihNSSWj1ZbypxnLQZCePQCPyFZ1oC8uMFCRXoaSD3NHrDCAHsjGN97rwdWdyhnKkiaTiQJ",
  "key21": "3gS431WKMSooKP6fz7LaLTp2o9RV9VS3qGWdMNaGENTH9M9sMUmsi88GHUq3dV3MQ3ngJDMn3wKwFjaMhAqxG3zn",
  "key22": "2oPexGnxSJwSvdEy2x3Don8HHDyoQEjRjEGtCWuUJSX5YsrTENpLnZM3wPcxnEhVaUzcMSWNHZF2AHvehT4d6tuT",
  "key23": "z97DqKC9WB84EJqAPmDQrSfdE8eah691UTTum7ihB1CR6QwsD6h6k4KriUh4nwyH7MZWXbJcuW2LHYQqrLDfksp",
  "key24": "2bfecbfixBUXNNMMeJCpGwz1fJhti4iCaZyr2wRrfR899Y6rkJjou1Xxyezbc3rfQV1Pvzh62dshB9MdNxPQPPjX",
  "key25": "4179qbEDJcFS1BjAVGNdqek25hgA1EfuS9gJTozdqRAy5753SPybPkbR3ufCWomuzpyPXon2ank92tf7o93zgDJ6",
  "key26": "4jBqLxtdEXJQ96r4ZDHii1vuyGJiZ27xT66YqAzA7MZ1wGZiXZAXYgHGv3ZnJcwpDict2PRnPDa5xVZWghyHuFa7",
  "key27": "3TYpbdkwgew8WEkVxBmhXN2pHfhaJ1Y3MnWWXJmeDg6Z3AWJs4hyX7md6569oFHF77iieYBXdqwz4iTX67MvX5Bb",
  "key28": "4XboFZE87XeRE4CmMTsw7szYf6nEzSsPK2pcEh28mcbiwHWhMGNnYFcUrPAu4nfYysUNjhDsdSDd9A2YXpRUDqFz",
  "key29": "38Ar8y2ZHGUNE14aFXMuya6kr95PzDXJyRvjym7phJyfCuNtcbLaSM4Sjf2LpuEfLuwRijZGimexTbqfhdhzxhgM",
  "key30": "45qerCJunTVhRPTaxvzk8b6YoKXU3483qkk3MqdzxEEFZLpo5yuAqopQto4eFun1QLzyo4uioMh3TuQ6Ru9E1Gur"
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
