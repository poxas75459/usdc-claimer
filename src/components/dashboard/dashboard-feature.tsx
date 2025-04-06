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
    "3AYvqrnd7Xuf5wKiHeET7GLi3KPp16z7t7BAHt4fDFRMXPeDiuXswx6S11yv9NpmcGDZMDx7iiSBrvL2ufrkVBMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WRMKb7hEpQLMiXLyLmg15ev1VqciazZACq9vGaKPbKGiHd4f2qCbHTVaAzNGoVBnpxjPvZeUBqU1hdEUHcvJZ8w",
  "key1": "4nGDSrVr6q5Zp6YzDyCNJNgXHzpaj2rQUw8D3pFrEUbyTiiNk94j3vFXFxnSj7Lfg3izP8MAUu4D97x4AQGUYgj4",
  "key2": "4fN6tj72aBHS8wRwuRFy5pgearLTN8N9MMgdyDDFHRy5crQYoCmXZPq2ZaUHm7udxfUJpTu12wiMKdc2GCiqF2vX",
  "key3": "38c22UEqYZqZ524vrPmkFxCt5RtnvdKvs1Pp2JwPeitMCSijqppvX47LjAGxLyRN5M4f3yhwWHxPKg5d8wJns9ww",
  "key4": "2kM8heJTRNuLDLNVj5d7PfXP4Y3ofD6Fg3oyznhAQCwdSkGSnS19pgMp83PPUBAu94D3dRTdRzJKQvRnJmrduYYi",
  "key5": "3t6J9UCgVobkW4qyT7v5ZsP12gMRfSicSLBkSgPxjKkbijSS7vCuinjL423qmuPXJ2kAvuSkzAQmNkqGSDgmByoM",
  "key6": "2eFcnqRpcxPfNq17BRphhF49cn8QRtfkJ1dtbKZNjthLZDiojF75MpG4t46ByeXsN9ir58JwZvqHbw2CEg1txWDM",
  "key7": "5bjg3EP65K4NKjiQwyNzkLP9fdqv9jdbg42dGkBFqDxiZmm5AWSD2sUSaJVj55ydcLhAihJuxi7jfAo84NufXZD1",
  "key8": "57PoFiRkT7Tztt6BJuHW4TGBRZ1NVKVWvV3MnPxwyMPyf8VP6ZV1rcmbkmVqEqRqxUYPy2sdTk1bhuGYvamko4UK",
  "key9": "4yuWgMXcwuBmnbaYMnKgzCe96WiFRLnWemid6n2RmK4haZZo2nGb5pPN14Dn5ysPAjgQq3DYd5iatmiqiUYtsdPe",
  "key10": "2bh2VihfBRPbKQRSDVzYxKF1NSHQoStYji66DGzuVjexUa2BtuM8zaaZzQshdduej3uNkHfYeKsMGJPZshq3Tn1h",
  "key11": "4C3zPcKogizsJf3BmgSkf3s8Bpc1GP4pYDd5r1n3ic3EzgkftpYYptaPhyXhkGJ8fqcTyDoWakZFksEmj1uyG7WW",
  "key12": "3A1wXZr8xxFA3LzQTGFVL77yxTSY32PhhuLemaqaLc8tLw2YWQ7RAPtVbQPfAJkBjLw6YCjYVuQkxNGufLvhGty3",
  "key13": "48MXw5VDP9enGDNgGSuFML6vUG7YtWy8w4CX8nCHfCpmksEYWkbbjiC6PoWzcQQaNyeHtvqSEmBJcDxKKnFXvqxe",
  "key14": "SFxfdpbYAth1taz7pmsCHvGrurQzByQZFVHyEZQfzD597jpDhASTFktvasVQvuLU8ddpTXtq7iBxepDU5XVcgzP",
  "key15": "C3nYeWcgpLQXvGKVG9bvibbfdBjZadaH2tfDQXa4uRk5U6F4orW8kdP2g8jxAJLtFvmWJEuBJi2qLiCM1a9MVTU",
  "key16": "dL6HGZWviaco6vdV7kkdAHPdYMRUuoAxA3ChE3e9d9ZuwZtfRc812faeWuHngLj6vjT38Sc3cGbBTMQLFBKLL8d",
  "key17": "wedqpj1LjBvoP46ifHNSoEfnAGWRPMRHP1PrPWPDFtG4MN21p3MQVnGLYW2WSSJNiNwQkXjhUmoZtASfSMd351F",
  "key18": "53beuKbwgfeNaRGGTHiYDq2Gp8Vrf5gaMZHYBPKTKyjfay3eMTNTKUNEbmr2zadsbKWjh9i4BxsnoQ27cMQBq4vN",
  "key19": "2sTcTFVoHTA1HmVbZdpA33K8bFdFqYgSqU4e6wxbqxaQLs1md7XKz7yejAu2FfvuyKSiANsStQE2c7XC4hMWskSi",
  "key20": "DKukn6TaBqzZZhP7bm7UCaJp1ar4ivvqvrc89ycbwocb3Tbe41M1M3vaeMxbc6gajcBzik7LGqjMXLsiTG4eGw1",
  "key21": "4a2TSrhFiNRNJEw6wrGJKBeMc1fKSznj3ZW4z3tQkf7osmGFeMPdZh2FU2k2yM1znRGwzBpPVGN9VFJRgsUV8qtJ",
  "key22": "KLp8dDThki88vxGBrFTHzTdMk9F966mrhhZa1VSdbs1LjxY8UqM2EHJC5Ehpfa1cyGhvcJaXrET223mxCwAcpre",
  "key23": "5mjpnzMjWWWzAMNLStiyJB3hzQQnUnBq7vHrQEUB394ssKJctjQSxLVvKrUxAbYecnsgdwYihSh3rhAoWbSSLtBe",
  "key24": "239m7WMW9QeVXUZirdmKyL3Z3kwDR2xPKmWDQ3QhS5s7UhCopoNMYKZdFDaEGwC2K3qwYy6EeaEFncefao6DC2tz",
  "key25": "5Qt7LtUNqxLjX2qbc5vQwwCgHKvjA3inJBfNELwrNxK6UXNWzMrmkSHwweFbiY6Ec9FAF23fNV9BPU2V1ni2TwGS",
  "key26": "2eqVtyw7JHd4kUGFTsPw4ydWGpiThwn9wSWfjMJ5DByG2Du4rqCUKKbJ5hczfBTXUjLYpswzwpGGoH9cyQzEJ2rD",
  "key27": "wWxS3MYxpYSx4Vqpz1LrmkL92TYkxa2CVLwRdaWFNt6uu4r2T18VYbZcckDZykokW1TShgGuW1f7X1i9vYYPGwq",
  "key28": "2fdN4PrbMd7VrL7ShafvH5Yaksfiaxg8bG7hJKhPk8GFjrqKgnPMA3xnu64zoXqBAu2gZ4psiub1jGEKhrWsJAxv",
  "key29": "2LetYCJKzciqpmB1WnDLw8iRGMNB4VspjLXHm4FudMgJtBdQ944kA4nJTKAhdz1b3q3sjAqrjToCPB7yrVpCwM2G",
  "key30": "4PhPWcRbpYhvkSe7pDDpiEytMPS7VHqGJxT1oHwzgfFXBbQ3bUuJ9pB8e8sJY4fwjCykjKjddVqtdypph7baF4hq",
  "key31": "4gRDTKJ2FTz8P65gMdXnXM4kWz8yv9tw18oYsWeEJAXmkUJX2HYjkLkhXvYdNXHDhcdKvCF7QY9dLc9hNzdK5iGU",
  "key32": "4gMb52weftNwybuXrE4T2UJ281JqeE9asxnAwh7fH57vhgM9MVRyQ9zUKMFWtHqFDKJNU6jn2rp1yhceLj4NCTQN",
  "key33": "2KKceAeQ5rgi68eUTDK9rDN7pxkUyZxGLEc8tgxDVTL8nzdRRSApZ95hwhYBqZusfZij9Fq5GCrEH52dfn3asLy3",
  "key34": "4HTUigaJjZJ31MHANabwdDVZ4T8eCq3omYpnsgNZicLo1XCVTTtCWim9cjmCeL22YrXEyMZLDut8KXCc3zUhD1iP"
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
