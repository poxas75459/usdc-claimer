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
    "eVKA7X6eKU4nYjeUT6q1vCDZDiSNF5opM359pDWGrxNAWjhsuVSXGL4fzDguUv2i2uaVgxSyb1Uz3FipTBuUpjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SvaxnEkY5iK5kVzsvVm3SBspJEDZv3u3qe8fjYzsG5CAMNXiJXCKaqpnVggUsdK4MkGnQr15eauaBe4Ks5Naz1y",
  "key1": "5drFhQpLk3mYnkQFYRWtqVF6rro89K2PexLvV1zLsAZM6Y5nqwnegt9pVzxb2wPBB9xuv11Jrej54mSYMwrfsWjY",
  "key2": "Pp97YcqNeTgX3bFrJ6qNazTSF3gFVR8QfoLgNgM8sZYq3ARmbLsfNEfHXHyjAcQHYDREbnqfZzSEWY7kDQYQU1W",
  "key3": "46W8H6QBMp8naKXvb1MaLrhq3ibABYLAyREY2Ufz2H1MzUGoCFBCquDJmfMpAdqUNVDqFMbJmnVeiZAGMebb91P3",
  "key4": "2ejb5cAFGipBwH44LprHigmtXafBQKpc1BAN7rFhfuGHPfTk9PbKqFdgPZuf6L9HTLjDbKkFNJMcasK6nDNYJYjw",
  "key5": "22iaDwUaMNSBguMzcwsYMbW8yBu8evinvrFutiy2DWv6FczSHAz1GwCgsBuz6Z6VgvK9dpFfBAPaj27e9oPiQJz2",
  "key6": "3VqaPNFpFJh45zSTWqtDk1eXk68DGsqsWb7zGWyL4KkgmuyHcT7bLRaUTqMg1Ce1U5eQYN2vjE6qiqFmiJEQmw3g",
  "key7": "5UTRbetaMLpfrFL9SJ7xmhHXp8jtF2nbcF8Bpus1MiUykPqaoDoaouT5y33rQzim9QiJJQLGqMJ1EhsWhAMAzsE",
  "key8": "sPQBZWWu64zd6EUXXVxjYU33hVFP4ms2EdSEZvKJzmWjZF27NLDcFXBxawvF3fPWxVJgbX7n34f1mZ5kETbvPkJ",
  "key9": "5HFy1pd1GqqupUgckkvjRPEG8nqQDABXc44x3iog6ajMa1ZR1oPL3XQaj3kHmJGt8tZgNY19BdHCBTYMALTFT6Hy",
  "key10": "4dX5avrkQtAExaG57fQhoSkbLA9FduzJAh4noTTuEfTdnZSQ87ynJZyXyiV3T1jDrWm17eNujNbfE65kY4r3K35V",
  "key11": "3SeaqDmk4QdYPsMt4fCHzzF9pkR1wtL32DciK1cN83CHzMfs6C83qKkqmQJ1y86UaV9mPmXWVB5ES4zfp3N2yjuZ",
  "key12": "2Lzt6cBEGzZt9GHHC3gw63eXKLP9T9rq3fxzgrm1jKUBVm1AsL6TuFiMVXSdNbuFTPA1mnKYbwhz9moArhnWhP63",
  "key13": "4Ds2ZWQzcSiNPT3u3bSfoucAV4nmQhD68jpeTnBwu55JMtquBxALeAgH2q1VaX5zTyW3ci7FpkqbrMbyhyna9w4x",
  "key14": "5AhpREJ3SEXN596t2NsscTpxb8jQqHuYX3ecK6BjRmzXnqLS4ZGuYufvuUmpUymAVL2Xm3JxAbrkEohp5vmMD9qE",
  "key15": "3gdgBMCw6buTGCUn2uG7tc1JYaBVqeVbNuArynVX1VjcGBz6NomyzUK6V7ctubRKH5De9ctkEQxnsD1opneW8rju",
  "key16": "L7eYNEJruu7N5Vdfrc8VKdjRDoHjpMitum41iGivvQL1JZtFR2srePDDsQ1kdpT45vg5noiukHNAnHCbTd9tYda",
  "key17": "5o8y1fic3fCzCYow4eT5cKcxgpG9i6LeoCxS4TSGc8wmb2MjwFuujRWfByVBEGEq2mY6Zc3qcgHUdUmM7NDsanok",
  "key18": "2CroVFeQSKD1JiVVmm5k53dVAFQVtbCo6YnKhPqgTW3rkb2g7EQnr1Sb3dmHKegM3odqcP7SB8ciB6yJFcieRh8k",
  "key19": "v4bUiWUbTekBHPGRGLxk4D2Lfivzt4zKs6YCXAk2RiiSU69pSrZSAv3Erg92Xn5qoBy2rzppDEovBohqm3XiZug",
  "key20": "4nMYUipKwnXpTTADiJfb8rgS5jX2AG2GSxaLCDxCbCavsnMMaFLtsj73iU2vGxL12UT36s8SaT9fxty35MXGyKbA",
  "key21": "GwxUUFGJ9cVy6P3A2ekJnqkiv9pbVwrmxbHYD7Xyn8aJbAKd1KacguHUDCciNUkTmeATbTzJpMU9qXCasXpQHQS",
  "key22": "4KZFsVFmxwVgyp5aML2X3ADDvPZJfWzXkZVKXRDZN3cCmuPE5DQwmrWpSaYLZoqgmiWdjssJK8spgRdhLmYY99jW",
  "key23": "51Puv8u8aEWik6XiaWUnzmxUrHpvF3R5m7kQ411yc1m7Vuz8UtUzMNxpedkQCPLUyyXmKkeTGrL5pPMWDfPPgZsH",
  "key24": "7y3ceowchhWQKG3bR1AMgRXLMqXNxotMNetQSdSmR5dhsoTZWBQt7sGNPYvrxZRWfw4UCiRCmj7F85EnPdKzuuA",
  "key25": "4QTtytot1399LcdjHX3zNGu6wFSfmeL1oNQDHCq8bk5riqJAV71tgaynDbkWwiW2r1BYedoENWauigjZ7T6CS32B",
  "key26": "5fKEC9aAhTNjok1j9gAzasF268fKAK3KvaS9ZMqkYM77ndYk7ggsCWBUurHZHcwFRBXT7WpTAaTvNMGqdebjPtG6",
  "key27": "554VLP3NgbKxqxHXuBj5oojLwUg3wfBUyFihWJXmkAvEsfpJaHFbMmyfpWuc2r8EfQEQnDxk1ph3KbGprVfEbTVE",
  "key28": "4Um127ZfFJ4coc3JUCvEs3T46fsTtQJ9Ut2T3NdoQPdCmXUQD5Q4EHXxBtjAU9zzGijSf8buM8GJUsr4sjBp2eiA",
  "key29": "3hPwmwwcUwtXV1zY2744x9awTyEZ57BzuiXPsSFk2Fue8MvTvN4mPXRUMKzV8yMugun1vvyytWoc1QJoBfpcSdo6",
  "key30": "27GVSszNA8xAyUbMWaRRxxJJHhm2TyCFbtTZQXFS3fL4wFbS24fQWKHDf5f1zfrr7Y7B5H48nCycAbGHwi7kwKHu",
  "key31": "5KgvVBmpEYsGMZuoJVMHFsafMf3YeDNNoRC5HJHmkQf9SgfPZQLdgaSrHQs6ss1UBpAJZoEhh2519512WwRt9yvG"
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
