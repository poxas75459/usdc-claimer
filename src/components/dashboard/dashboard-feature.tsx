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
    "9UYUnEeEDX1vuqnufAVKBEa23YoJPkWeGsSrpeABCdA2x5HvL1LhFDfJ5iXAQpMef3Wo9wVL8fs3nXPVU3NkkzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44D2XCBboarY4a7yMcezr4N9nrsCKGzSjw3KEWPkEkUuLHyHQsVZjC5qHTrgxUynxwkFNkkRNPa5AZAmXudJLTUB",
  "key1": "3UxodwBkGg5w63o6wEYuy1aT5uSuvDzX51A6FTyUhVbG67MUotDiiNfriH9bzhhztWrLWRMoqPiqDJSc8tYsepqh",
  "key2": "47vsKxZK1KcjikWRSnXcmFafGSpeGwv8vwbmhVMnkpBDfCfJpUuQswiYhyvndKFgdPGVA4WKqAwbjkE5wWomYUAH",
  "key3": "4sTnRLgnbu6KRnAEsRaUJDxqYws74XB8v4oSiDogXztS1SzsLPgNpEk6WpQdYDUCGDiBosHk6GfZo26VixkUSh4A",
  "key4": "4d1ch8So9KTfZTmxro11sTAjqmwd8boiQZkywXbykB9QpYeGixweBPZv22oxEJYKa12z6w2k5V4A1YPoo53wQaim",
  "key5": "4bwRw75Gn5sXCxGwjE5BDUQVsnsa4Cvqh5H5TfqT18UgnxsuQLo8zCG5ZszUBvNkq1spmsM7uVesQ6YVioF5BRXJ",
  "key6": "3sGDe2Fd8cL6pQP3SbTBBFZhU1HrEdn4cv56pRxFECC88Toa7HEVmNhKq6gUoYnrrX1tDsTWAjZVzbN4zsqvfAPv",
  "key7": "EZq8gxr5xJsmyN9u3zsYBibPCXPTn8d6qjofgrYN87khpgE2azfWXNZaAy4fJxsiKrTkWTc2G2Qa6BgAND7j9Bn",
  "key8": "3Lf9JZvLwUDhaDGNwMxa4eEFZbfNqanPxBhLuJHzDyZHduHhniwrCj8LQNPumQDvix8s5BUrsh7bHyoSoNg4N2Ad",
  "key9": "4WnjjAip48dpgsmhHzWcGRby4uwHmyCQdgG9FGxVV4my3Ur2A6bKNcUF5MzpJU7XPbD8eCNeTwcKahT42CG7qnpa",
  "key10": "75W7WwtCBSHwu18hcLvZnYLw2T3f8zgWLcz997koaF5gnrWkcPEEyQCUxJYpiCFR48UFtVycjgZcbnQdxpAkU5a",
  "key11": "3S8NuY76G358PKceTk7Rr9rHxP4hqpGtJWBJEyxmDWTvd9TbBYGAJkgJp2Vkm5TVFttizwhi4Xbd6AU8Rv5vD5Er",
  "key12": "2aLZYLqVfK2MdQQK226h7ZUb6gnSmNbNGEie9np8syk36eCyaXeBD9vDyogjboF3Py1dSzkCYa4QvWbQ92tgt9se",
  "key13": "2HGM4Wqx4R3gNZCRrDYp6pG82jNdZAnf3Mcf1zMe8pUzf18GwsyH6NEqixV1HnraQjmwSHKRF8qoXZcg2EiQ3BHH",
  "key14": "5DFS8bitXJ7AePdMcLu6FEqNm1XggFYFLf4Ye9AMVC9Dqg7qHvZ6iHCN7wNoZ7QbKn9dNcFks8KmUr9AULvs5nyg",
  "key15": "5fYa3HrJmgPVL2UaZ1FzS6Sxq4jM9uDtmJPVYFJ7MjdN9S5Wer5WaoLPxNy1Q76FaDhz5qa4z1a7wev4bjA6SYAB",
  "key16": "41xe4c9s7zPTHobab7ggpM8RUW79YnjY9qQEexh5YXSZveCZt7Rb8TkXCqTrTQRDqh3T31TnWUbBDsgVDvZAaxkG",
  "key17": "27adJhGu5bN85d1EpgrZFTAfE3iKK823tdBzXE7vDDkvqcGE959Bg2UVQRBQCkQnfDVhEGHCMsQW9XpBmqAa2eTG",
  "key18": "Ab6nsk26kwi6mQ9nwhNxnvBv3CxJ5E31Sr3AwXUjprxZRkXEoWvirq1DcSjtF8nU5jWyQZtTCsaKsjKtBawYGMZ",
  "key19": "4EFjfETKfFP6EWZiHNkBBwNjKr6Jt4DANti8pMqXomYmHLvncyyUCAc7Q8bwJLWLNJbuywQccC7JBVMd2ybt37gX",
  "key20": "3hNYZxNwRfUkmAmKwdwcC2yvE6gcmSBseTKz2YLw8pvNdxdstKKMm1SiTpA4S6QvK9sRsXLiDfBQoQpm1Fab5bp9",
  "key21": "4g86ZUch8datnEwKBtUSgeN5VfybG6jqvVw4aJhTA36gaaDotvUjGt9bf76Toh8bAjXaRGQ1QTM9pUAkXN275cAo",
  "key22": "42MWoxYcrYAD7ApKe78AeV8AtJRruqN8u3dfT5ECDUKx31ja3NXHPBmH35qvCw5t68BMBXGnzVtCuZ3bRB7iBvTQ",
  "key23": "4JasVAhLbQoRCkUf1dqabxFUNM1LdoyeaxWWkDgELf5XasMCi7i1mbYrPwC76hXonBEaM32CmsPjRtuuQAggHyyx",
  "key24": "3xVUD2fSwAYqTQBKfSabQ3ANL8uZjkBQriBF5Z5yhXBcUrecvDeZjJyuBRxDiemmvSfNnQgqeoD4vzmjfyx8YyGY",
  "key25": "ouSVRUCnRMD17AmL1qerKV51YYeeWGLPoScxhvZhJe9pEbnp85UfixPHFDUnEQcDxEM56V2kSvAgzTokh9x9Hmr",
  "key26": "3V8D5s1hNoUCREVs87o8CdeSJ5YRnPKgwLbXZmaXebUDewJzQo4uRrNBeRFGsHwMgsUNndVczLkvumN2AKJ1ocFe",
  "key27": "4EjgXqBTMbSXtq3MPfeKRaxYCStzgm8AbyvB8ZLNQ7u8hXptbgFsrd1dTg2h3Vdk1bR9Lm1LjorMk6pSVPjzyRDg",
  "key28": "5441uRLxEaCn96Kf3F3vkF6s4iq7Yh4XQ9nGGpjPMZBbjr46E5XBW6yhyM3uHFqjbkbGUnxFAjLCpwwgW2uNFw2q",
  "key29": "4JQYtomdZkXPfKYHhEn8kgsxD8qzxrRuSfy4jZ6er3qFkJP5VouDKjtDwLGcqNx3wFd35uR1M2Rf9tdyxBaRNCef",
  "key30": "3EAb9JqCYUvgN3dovVs6Z892P5CxG2yHEmJfvaVtrSZvjxK8d9gZxvdprQmDyTNmkoPgUd3ehTMHMZXVEJEfV2g1",
  "key31": "36xrdpkVfrcfy8KWr563rQMfQRNyBvrLU4VGGFxTVqo797BkoQc8MpMuRBYqmpSSWQ9r2H8QZHjXEAWwukboUXt8",
  "key32": "4wqZgpT4xZrn2BbarZcJZwHivZC5zT1tCeNCbijwjNhsUKf6YLCLWkT5tvW8tW4GD1Th6HUKyaXbjzL8vi7cuLN6"
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
