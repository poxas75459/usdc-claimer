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
    "Skx44HU7zCryTasoxt7nt2tfu7bKsHEvoWC6fabria2ANnu5kEotsBrpMEjJPABWuyznBbSRfqzSMdKe3wNFFmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59j2fpxrhQCJYbCsfcttyMuy5vPMby8mFi47Ly2jZyM486sZTxjAm6SYkyUWb5p7LYCQCb9BpJmA4qtM6Rne5RD2",
  "key1": "oZtyYueai4s8E1iYeCx5JPGEWUe4kMYRmZQZSbSEWPh7Q5pcRU1J4wNiMnht6kmpHNubMUPNSqeTywGyhYbJY11",
  "key2": "3LJZr1TktedJQgKUdDQQh65hhLim4vocZdua6GnP6rG1g9S6vGRFNbo4J59kymed4whcpMRmf3S39H3ECHfbgWqi",
  "key3": "22CmpGfDwsDuRkkYincfEa7BgwWyGsQ797jy4ghrc724v2beC7CNrjvf3saYQ3XJw5LHFCE7iLBzTGv7RYXKsFgc",
  "key4": "66dCuWc1iCfGUrkZejfNygDxsck6bfbs5nGh5bXpwi7VcK1PZvnTztQJp2d1BNJCMZxpYiPhfcU8n2dFBzEUNxPr",
  "key5": "2Pq4jcYqeTbSSYTxz3U9wqQWk5x4Vgzi7TqUnSdYLXrBgWU2kmJL2Ucj6Zkgv5cnj3C9FEij9YQXWmzAMQfzsTBM",
  "key6": "UK449YJZoeP1Dt7id3NpZNdDBwyY4zY3AxFpNbcj5ibMNvrbnhpJCnNZPjRhpVXSLJ9VQNXsi3Mf2DxGpj3Tr9g",
  "key7": "3htpHgiPP7ne9azBdHxbDEvXthE8L8R6Tm3n9FCmMZRdLTmwHHM1YHw1B65ucu4vKyrTPRuuF98jgk9qMDPAR2ox",
  "key8": "hsZ3oUKc3ygcVx3ADMAPtbpEh6zn2Hmk8oUzpfoPuhnXXdmUQepiHVMADcGMUJQ8f8tAixxNz7TZU3YmdPCZfF5",
  "key9": "3eEeegQxxjeo57WfJS6aWWAjN7GbBugK13LTQUL6mXgN6FHk4a6S3LaumTRkWzGqeDP4RUAjEsnXjjxbZoCGhNXi",
  "key10": "4634Go5um2CrUrb5gBkJmTGfA6Edibk457FCdnNoqcYkUxqeeWib524ZYbKPEhpDcFAtHW2wQU5AKzhvfXY9DZYS",
  "key11": "4GRA4k9514mbA8VyEGNkda5ixUegdqgSCvt8XdVwpXJ9th1vvuUEz68GXXsatjZZZeUu8uECt9SiinLGc4xaLoUG",
  "key12": "4WZ61DUsnc7VJHF9aNfJcexc8PWATv7tYjgHuhoZbA9ADDmYbdKTpP4WTKpxYsfL4bzdEUjJRa11SUuYC8aKoiwM",
  "key13": "65aGaPpibfCzLRek3cEraN2X7kvnbgangZ4wt9NJ4TXtf8ANL1jpSRqVkrXQ86ccjGwHoGvMWPNc3nRctfpoBLeo",
  "key14": "4Xf47FnWu1JD8Gi9AkUg7jNuz2k7Ew3RoPqyVHrXin25tDrgkDhBkXT8XTSugYKcirTffhHANpwu9DLG8PLwX3jP",
  "key15": "39Z8njD33FBHtHKLT65gf7pzjxrdy8zyXx3mfxj59DBoVZ4sjeojyKCDsYwZHGHYwAxvm95bRu4PnbHLodCqhLg9",
  "key16": "45JopjcmmMF7XuiHTi2A5mRjdRL1rLxpQCatLmFF8kE2BhnwsLzbdf9wKhdQrbj7CxUSbTEPszAp3oZoQPRBw9Q5",
  "key17": "81tAw7rMC9Ewgg5kAjRU77JiVnkEMCcYhCDW4S3K3fbWekZ754JZXftY24KBUPrBcc1fi11FwWV6y5tNo9VUAsc",
  "key18": "5MnJVKXBXxYW8KEhgyXggZmBMjTCyYdZeRVJ8XKgxoVdKKfkFeT97BmYo179dksinkSoymq6gLyEvHoVxL6ic2vS",
  "key19": "23irQjuM2DVa5owW4ZSpKP9q3TBT99ey5wsuWnXFQi6t7y2ZPHVCnYKdScN6rNeKnthEiu8oxeCSy1gshVd1YioF",
  "key20": "2D9RLYwGESDG3eZ5URrK3bd5iH13tLV2Ygv7GvqJftUnKPrGTt1pSMyAxk5bdrexEngCXaKcNRUMLiW7aLJkvvQm",
  "key21": "mKfZpM2rbzGmMeS2PctTvwswRW1P8X95jnTFbZw5nvQKLizZBnCcVu5xWewkMLQ41BV761VNqeLaMWS28Gi6PmL",
  "key22": "5RTAkiajnJQxysbxB9nLAWacow7wwgo8W1BJWmRK1feQd18LBz3XwntSFErPmo41BVwaTdWA5w7GW15JmATUeAmR",
  "key23": "WSRph8hfVrBLnnCJP3EwXNp7GRyi2yeUfJ3zaQBTr4aYi6L8hGmg7g8V5ncCU6nNXy4a9DKvuENdyP4TrqC5eNC",
  "key24": "52RYCgEXAP6JuXwShkT9jSx4g8HCQAh49zNreMX1u1N3ZwLhEpiJBXJuC1YWaNuf7AB7g5hp3iQbpzU1qzTe7zJd",
  "key25": "UytGz1eSeS51itMK1DsEAffParCx39ghnSbqejBd8r8JhYXapis49uRfQGYhxvQUMpEPGcK8x8zthNCzUDiPath",
  "key26": "2FvNXs9vFwLvnMgQjmtHJ4F7PfyWeqggGNeurEDQ4Pm1QzdPR9HWbYALqaiRszTw7pVYSU76T65P3KGFEqiM3PNT",
  "key27": "5caCZJPjnzWqQs2JacCrXQVcsu593b2xVwqNaYgP2e6pBWSCaKsj1dJs3wZPbCXJsw6YgqKiiDoHRbJuj85xVKzs"
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
