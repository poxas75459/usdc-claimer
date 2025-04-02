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
    "5e7VbRALu4NVJTy2YL4eDz51yb4YLkyWNmGHcvsJu93zFFNQgdmyUc193HUZj4ZpjZms5gtKSoyrzgYMsACqXWdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtxCrQVcYUg3JQ87jqkxUG1nDsUviaxWEwvrsEGPvBokjZPJxXj7wZEtnCf7R5LrSbTF6TxR8dk21D1g8mN1riN",
  "key1": "1YKCuiKFXBZiFGEwut74DiZ6v6A2mfHmK5EN5zD8g1hDxSpkddc5VzsyW2qAtCiAmRvF8FSYpgAgMQP7LNdrbuc",
  "key2": "3rewXP7gjyZ6W9k5AjpzZoNmozx1Ku7P8XCB5bqF3AwsvrM8zQy7tS9WRypVJTFfMCGxsThCJ4PJAHuczA9vN2MC",
  "key3": "5pivNgGVqQhmUTDSSEtZvfzTzHYM2Wd8MsuqPqr7tquN3pnybMc7uyv6fSacDFGj3uNEvc7PKvZy2VbHudXEMhEu",
  "key4": "4mZjqxJMViFwFkEByw6dnbNst42tgqauKxUtecCm4vQhc8UuggynUv6vqXy456G3neWAP5k3sVp4Yg5atb5RMN6Z",
  "key5": "28TEnWvEMHNgJUaNpBesVrUsSPMwAuQWBFNqw8BMB8CMkyUQ3fAHTjG8StM4TqNdt6pmgFwapUoQsWjzfRW3gau4",
  "key6": "38cjDdVj26rK1XMzWE5bUJ5CbW57QjQs9N5Md7zSEPcR8KakrHe1PV4UtLG9U5NDmoQWrSd3y3uPJSaRvsZrMzpa",
  "key7": "28xEZkRzSyLXRj92WLCxTvB3H6t3quZnsqSTzUAT2abP7htmDkDyi9SQyRKjA6tUz2G24d1UcfeqFd2HWVRyMZ3d",
  "key8": "kh1fw8C8zpKSkS2ebBLTNZgrLXbDKWn2sAjv2sW31Wk4JefyEwHbJQRBxScAdn7QqCK5oRqLchj8kkNNxuG9Ku3",
  "key9": "48KJoy1dxQ5DFufqgcxHGksgm7oLwRZSx1F85UQMNcrdCwersmhcqZwk9zBXrtKAiE81kAAoxc1q2qk1vV1fc6hz",
  "key10": "5YueNqrs1ctHF17J5xdjME6PibiYVrET5ZkN5f3oEBGDV5YXMvVAcrrk8dseWCUtRmLfjnWDvZgPi23CjZQahhKN",
  "key11": "xrkz9Kgo3XF8KH7P6tybZjLV7ouKvr9tCMFuNGkags5sR3uCWbfAGqYg4ZxBRcef7V4tsHLtWFcv6yHnzLCjAMt",
  "key12": "67H9QScu2bDKRdv1WAXn9xiKqzrexu5FNiNRLsaRmoACbgdkP5c6CNUPPjP96TdsYPA7FcMr6YWXJLPVNsHJdgcr",
  "key13": "33wuWy3zyNVV6N6ak1xGVgfMCch417KEuxf9GvvFbrJtWMSC33wBezS36zrRjA6c29o1hYkvCGrESnCmM4x4AuiZ",
  "key14": "3C3cdVNU7XH1kaxNWToL5cfNs7SmYLY48Djyfeg53gAvb6XDdd3TGp7Yzk1E768on47f6FARackzQG1LJ8dG9bno",
  "key15": "3XmFhJYfbrP2w7YZ7hP8kHF854kRrxZCy1Qka2Qa6cDqeumDhhExszMVxQBQJvXygMA3bgD9n7cstiKxwmdowN14",
  "key16": "5HTbpRczDmeq9aoXX4Kt645JWXAvgRkNay8KMPJqDXtpHNrRzm8USUrbchfG5f7Nwj5ReSse4F4mKStKZnkvP41x",
  "key17": "5U7pEwsHkwBmVYXFQoD2S9Pfam5N7hnZ46BsahTdw9MMo6x1fbFDey78ZgY8n2veLeq6Hdpbs8Pi6vGRricELMjF",
  "key18": "3okCUGNUBm5miDdJfMom2MLW53J8TusBR6GFR1RZh4ipffU8afNUi7uZwBYy2BFRzq11FPy2tjZR45C4JPA3cWSA",
  "key19": "3StaNSEfFH8NRJVgfNReefy74fXdWLvooLV4EXrTqCNrjEToj4foyGMuNMkPaxc9EggwnzLWGXr9uJqmx6PmpZvo",
  "key20": "5Drbrbc2NBHWsPArTiBpFQEzhVqaLYopTphsMXoFGoSZ3JU33rsY3bhAbNSMFx1DPHHdQuUJDYtfdk4VRSsjPH6w",
  "key21": "4kimvwPqwzfwHrJHFnNxDh8aAM1NKc5TuFhmha6bbks3Tk5sPd2z1UUpLo1b4h2PcsmyC2KqMCg9AYmPL7scofq9",
  "key22": "6EgDm14zsCGoXh6QrQbJAgocHkvFnNvqkMzsLfjsqg5dzWiszqiWzVQ8ynCq9K7hRNDoGN5Jc4Kucp3bbHMwnUn",
  "key23": "5Bwk5C2D6JFXNFtQURdXVnk3YdFfxgAVJK77ryrQV5o56DeGrfTPaV7zZvr2eMWWCv8djZMxoaLMj9A99U4n3HMu",
  "key24": "W7z21HZFX7NmNckC43wmWRV6r6cwMSr7z2ytrD3xiVudeJ3rzFyLQRmHnLWzNuotrDXwuUFKodykzKpNci6F54W",
  "key25": "JesvBrL3V38bTSXYHEgqx2n57NtmcSjo8XGBuGB1abJY3DZmYm3b6VBHnvyCSuDfopMvKm4Y7NoVeLjwgnt5Bhd",
  "key26": "46wrpJdEMicunftoebFWKhj1bJWQTsFgQR6W2t9Wc8UCCSSFX18RPghTBG9sGV9y8k2pqSFhAS3TgoM7Yhnv6eWP",
  "key27": "4rnK8TfYYrGEhcFWDk4d897qKdwuEvdbfE3D4iiBpWeFVioNo8xgddhP1oKwCW4raXXD1hKeFuZSHEuBRCNRke4p",
  "key28": "3jNDZR3NB6EjzChSdhPpHTQFzcvtpw8rCk2wbw3hbxa9dNpdDKGNUDEbioy4odMSm9d4dtzSQUpPUUqJH4R7zJqH",
  "key29": "27mzF2vFzJ29XzQ7HYuvP2n8NyBGmHetoCJvn1uThfDENCegn9wpc5SmDUwwMmkr7aVDp2H73SZcFQwvcShn1b4w",
  "key30": "122p4xuDGDNm36xw1vn6yrVn1bWyn7Z7nRzyMxkRrZyuFYCDsp7A9kk49cyug51XuDw8DtRrPFMyFCAuVvLNYcPD",
  "key31": "4D5jEK3AgLgnLjqim3rmeR3H9B6nJAtn2pQ9XsGZF9QWQTkAYhZU5bNdmmZVgbAjDhvTYyqCQtj8Feif4t853nUP",
  "key32": "4riMiv4JhYLfauu1rGXWrWWW5Ej4XwxmSRgn51wDaQexFwa5F4bApfWntfydZ73FLXssdeWhsiQ9h36NfTM5jrFe",
  "key33": "5VgGczcE6jgWamXLA2hUfrCdq9tZW5FxotPc4XJXynCj7Wrz7pLnjhBG7yN4f7vHxo6zXPTPLtAsm6n3pYwyULi6",
  "key34": "2LSJpJUJi17yfFwcG8pghxrNyZr1M7cYUg9rzhZ4xeTF7JGVuU6G49jfMySP37hUsULYgSRGMnJvDq8vbnterWdu"
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
