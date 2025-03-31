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
    "5wnbmc8ynPKbv1vGkoY4tUtx5YBpmCWhiB5qatvEueLZS4LfRzLkqY3FsRLewh1XrZym7a7TNFDQMvUFd5zCZwPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wUMjTHgPDrEqB781So6kQCaUNEHPTt67VLj7uqG8e1mrdMX1WouRBXRAvs83xJujBJvswrBphzsvuHsrpdHZv6c",
  "key1": "47E8G2x2AT1DwCAmD4CYYayqbupmMzuXdHSGJqk4BtkgigpE3iTH1JoNuep9izGH7BKibRGsPY3uirxbfhEbYD2d",
  "key2": "3CZfGF92TTS5UgbnpzLW2mFimPnZ5dU4MuivjHNtnpj6YgngmPaYmwVYp7UcvLryubDW6DAoQ7pnn7Bt98oAyjBA",
  "key3": "35FdKcTR6UWwno1anWZdc29mdNpSZKhZgu5g5z2Z5jwaCi8CHxhPNfV5sGNKDjqJduDtrns9VxyDwKEzHKJAg1B3",
  "key4": "2KF2eij4ZaUiHzQKuQ8Wuw8dQGgLQ6zg5zaXRZThJ3KSoruhQPHVM1uGcWj2nRb7YyWdY2rPgL48pQF3eZXyBVGt",
  "key5": "4ADngA1JU6nCeStJYCk8krxcrs6hdZgergK2eWoKGmkrtKwCQ81zipQEqGWXrA6zrvDtia3P76NepA17rLnjohp8",
  "key6": "45eP2yvHBV7prw5AgppMBGUGj5QNAAdxqGYXz6cFUof3mzG4xdmSBrbsrZiCMHJY9rf6mRpEPFMDRCJabSutcPE3",
  "key7": "3VEwK4FNGjRUGgpvUaqB92S8zBD7Q3JKwPzYszVxX27Twz1p1BRe5iqTksbtoCBnZq86tgogQ4rNUTnQg4H3upcZ",
  "key8": "47w96t1DbmTKbiwpcEFU1pLRLwa7PftMgRJhrYSoiH1YhwiiqpXdWx8jd2X4AcFzMySPrdV97NTUVG3hTcycP4pb",
  "key9": "4sg61omV3p27koHp8To7uJ3oai44XeSo4msfrGMutURCteuggqqJ864gcwJtJy7U15ukYZvCvXuzmms92CSzsXcc",
  "key10": "2zC8NKaxKZmjx3QcyiH7CrsHwsvFzRWpTn92WvQtrgDtgV6YCNpbXNpt6JNkgb484yMN3kF9N4FvNHvF31oHgkmb",
  "key11": "4oDybnoHHLC4UCBWgnGmHLJjSvPnAEhx3hK7uyEu2xjiG7JoACPkmCUFET7k4d6d7hNR1VdFjMZYs6UTrg2RGSYN",
  "key12": "4b8jDrSn5JCs2SMB9v4wGfGaYNTfJDcABhP1PtZMqqXCEHpJZThqBw8HDYVUQ1LS9A6PZq8nwJXncCHFrEvAB9CP",
  "key13": "4vbyfGruPy432XLjyV42woKoGugDjNqqiHTkbgmACjFrZdrg5MjP1xwSJwE9RvwpCuCmxeouhMCsB1BZifMzpzWj",
  "key14": "3rXxhjJiASMh4inRf4wBWV86jH6HLvNDJcMDpM2JQ6NgD66X8d79a9iRKFvvUaPgVv1gaYVBuphNu1ucaekiCHHq",
  "key15": "5wu1jm3SUy2aANo5p65UPiropuzCPD6RUWob58FhDi4gWiB75bVBZNPZCmEcEhwj2hHjTiJ1U2Vd6AzVH2PTaALP",
  "key16": "5CwNYbxRKxgMt7f23qrmqRrWyCRvLbYNR7mLLWXNYqji7wmQUYzoDC1jcVQ8AkN823pY5EyRWBZmC6SWZpFp969f",
  "key17": "4tgDQ5xqgAHEvz1LGJtDGb5duMeyhvivzPui9W1ofCZuRfubEEjJP5ha5Mz22gv7aoM2Rnv1HetTb2osAczDQWig",
  "key18": "5KfhEbsTNzotyRqzDdo28xX7AazUpEDHzuyRrkhc9qoz9SDuyqm38Pdapiym67joKy9PtJPhcMi7TbUaJpAELSko",
  "key19": "5yu7M3XJBrV4zgHk2QoRSC8BEq9Hi9LeLDZFiQA6eb7z7NGvkifdj8sxC6WgvQ71gSmajYBFvs8TrLehiNQVeJ4D",
  "key20": "2D6TjS6ZDSEUQhJpX1KpmUN3vH7UMK7NPX5nQkHNk9Ch1iCtGMgcw7BgeUoSWSYWeUAVP2z5WcUetbvxyzBXoRY6",
  "key21": "41PRZVAuudDNHprWkAJE2WWP2Manu83Pt4TZeYkbjzA4pg4jGwitrdGi4JxWGeC2RSM55QYPoiAFaBE6zTAaWgkf",
  "key22": "5SSYZxdmXhGLk1jpWuPDPDcsQNB7NJyCwsqNa4DD57pD6xK2iFwKqsCEYRr3tzexYxZEgSABxCHkAizRRsbjWEBN",
  "key23": "4DmWy8FHfonBCHKALJV8YitTtNUdRrVmrN5ud9qeMLBYz9su7Ah4TpRftsoTGuefAohGTbra2ijbCr4P7NAF7z8M",
  "key24": "3xyTSLiLjKPQQ1FmiN5swEX38fFw8mFxtLHp55J4cYdWWVR4ui96Ugd5NUhM1AfySK8HyYDSqoY8CpMw9PxxAkhp"
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
