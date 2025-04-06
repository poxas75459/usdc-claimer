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
    "22BotHyUHH2vWBgEv3DMidbUgs99Piu5LLy53kWhoTohDpEXtiisLkhYQ2fFntP6pvoLfsyk5UeBaQ1L4kWBimgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27WJZc64mWcDmptD9dq8SWJYHowQzJ1KbqQrSE3afBH8BtVp2Vmo6KKszqnZo25khggm5DLWTgjfn79z6QGoucPu",
  "key1": "35TxRsvKoJuu5yGVr1CAf64c8wwdu2gVzbR94caTc5FztXGeRJFzuAVqck7cg2SMg1W335QVwGQcDwSaP8pTdz8E",
  "key2": "38EAK2KgUTTrNi747X85piXuHM3wz69Z4xuvVsxZGiyRfhAYwvMGBct4r6iLUPaJ7eShAtzNuEg7KV9WQdyEmhUz",
  "key3": "3vre7dfoMbZ6XXpUtn8etgU6qnbknjfTGJ613eQkJgb2Lz7mCyrzFHwWTQJ5XmKdLwtJm8LXSAvuVZmRCrgFsh6T",
  "key4": "3oWE4592Ei7qee5R56o1YaXEAoqXaEZKchhqvw5uRUhfR6XaSdwfB8HRiA867WQWKCcNPVFSUjSCgBYiqd2XVCAa",
  "key5": "2tus1o5bp3aZTKmCykxDg3JdSNkDgZfo4Rq4Wf73KVsCjh7D3Hoyb9wezJaJidjGjHML8HgsSJpf1wsj5iUvo5CN",
  "key6": "6i6eqooxNdTb2WT1VtcGbo4RjrEuM3fn8NaLfmjpAVqUBX5DAbPRt5FhrjiyQWQviywT7wKSYKzBDpX6PcfWULk",
  "key7": "5WESNcjfyADZqDVU2R43hRfMcevkH6wg1cBAYds7JbXdgkjwj3iGQDg8d31tE6XWguqyYmPBLTkzQk7dmby2p4ib",
  "key8": "27S34DDbEuzr5UMgAoKkSef3Q6pRLpqd4338xhWWk6AeLdyYGbHHWY5TtE6Bp4r2x1jY4qjm1cWExkaqGUDpsagB",
  "key9": "3RoruvPw8uVcuNSE4SWBuHcnmX4MaDF3N853vS87DyC611ASFNDJvzLK8bdQC4eYgzXdgGPDQ52sDgZ8qHH68DRb",
  "key10": "5evvJFYgkFPaidAG4VC48bUbrhChSP27y99PVfsFT9ynEpnrh8HrTGrW8A8Fg33MFzbD6Eff3oTULD2ntjthkirq",
  "key11": "chEJ3Yim6MqVRSr7C1nFqsiPNTuGP735FkuMFN7rG8ZUoEUdTEfSYcSf6CjSLHL1Re3x4jtoCQ59pvS2ru2gkzw",
  "key12": "26EdQgedso88dAEmWn5WXRmBxsjoHa16rJEsqLHYKPPRV2vdMgPfjrwEjXsZ4WX3nsZLLct4Ky9XLpyeWcJirgeC",
  "key13": "43dwhV1AnrivbMSHviTaqK3iMCQEsuCibiP3EXCkvjLV3J5bimkRLrN2pkTGPYU2LEtBsGRwr8VfSdCWPF7Vi7xW",
  "key14": "xDvn7pwuKDNdCyMvfz46PZdph3nxcodBvKvpuBWTzNYJnx3h9ryLL663HULqrhmSYGAFmpfJxjrDfVkuHzsHnZ2",
  "key15": "3Hs3E962L2MNHVYfxmpTL8gpmYJybA8uprXVSPy7EWh2ftG3uGeiQhxCGo8DrqP1Bn7Z6iiUYvXNCtU6ALYbPgk3",
  "key16": "hSfTYZ7CYegHTFUai3ezijazTCzxYoHFDGEyy4dDJTww1VGGTBnos9FUsS3xzYBPmpqR1sCiiGPkvi6kN3SiR6U",
  "key17": "2tNxVmmjsFmVqCdo1PS1Vfs8YJ586CUwEsQxc2qPfpKUTnqZ7opj2EYZqSamrdiwHGq63RJy3jBxJ8p3Bxxi586q",
  "key18": "4DGnVXrk8i7fzBvrEbDha6RQALFmFuft6fFghDDAryTJ2LHSEEDYZkVnjLu3REtfem2dDqtCzixq9CDQjzFEveXA",
  "key19": "5cAGSASW2HaPU2c5ZU3PCReC6apoXuKNHZ6sktcMBgv2eh4D48RtVyUMooQC6pmGBtLkAA8zeU1CLjbKPvrmykU9",
  "key20": "4vEvPpVwGo6voENwr72KZqiCtQjuxM445b3WZeswEDAvnrNujgUePVgr5DnpoXEjoWMCFEMLCKQP2hJwgnomaSMc",
  "key21": "2ENE1Sz5UWtcqhNxXKwSA3wZHKZZnn4cZNfXn9uYcpTERfGMdHfBiwR27WrpKBqxCV5uWE7iGyKx79WhgRrweaXe",
  "key22": "5kRLfko1gWSMKZijXchoApR6DXsPUzvT14Na5TmpQELzKR6s6zedgNLrp8GSj7RR5Aqkd1NEPkPC58Mi8ACLi8jV",
  "key23": "UNDC8prfDpAYiLyLqqX7xxvsvHt5EiZnH69SYSmgXWSFXeZEXCc7Lo57eoantcKvomBnjpYieENxmhHwhztb7TN",
  "key24": "4qrxDYQpr7oMpZgCFXQxLPhUEQmGbUL55KMz74da17Ft8KENc37DX4Y7e6G1KVQA1Bj2otqnu1nnHXCLsJanQ6HD",
  "key25": "47C7Y9Lb3cc7PK9z1KaURwSpzFVXtFiik4Mjb2QZhM28TtJ3kguWEwigFdwtEjNgABpD25MiPKR1JP8UxvKuGnGJ",
  "key26": "5Ya1fP65qKLaQSjN1BaEdN7FNE5fwE9L8ZivBjrRqtmUfswjQk5ShcXTdzJjQDVwk3LZ1kCk5ZurK9GBULKBbTXG",
  "key27": "4itZ6hU1QWtqxhrEk67y5nV3zAQTvpheMqTRVeiZwtSKVsJUg1s4u2Bobtp1Br2nJ9d7jJLSH6kvExBrvocSMhCR",
  "key28": "472CnADXLTpXaYtzwShMBaaSGqvGFyZCZPdvqa2RcLHUe6oAQtFhZjDxpoBqzrFpdJKtGjA7UWkUR7t8pkU1Svqf",
  "key29": "3Px6ENxNywcvZDC9gD2Ne7DqiKQMHgpemCUeoFaKyqAAd4yoz4PoLNcYfafj2DikZ2yh9CGDupsCMfjgmmHiVeaQ",
  "key30": "5CVKG9ezcWyz2wYzuqEMP4YHGynByGiCXLtXYh5JbcFPgWmo8D7nGdVweWewqNmkZRkUDCV5WH75MJkBdLaLbPB2",
  "key31": "QvVnqT8HqgewPfN3dwUB5zSdmgGypNjspjHKuLmeBfX5qAssWd6EB7rBKEAiEU6qT4i9PYDgXjEfd53JiLHy4J8",
  "key32": "4o72kiVtjUewbvCcTokRLVgRpzXarkimW4aMh7iKJr7toawLE7vxf3pyoeE61YP9pTefyW3Kjr1b5WbJWtHa8hSb",
  "key33": "4mPusx6gerVy3YRjgVtJNDbRcXvw6H8XNhCXczSt3B6Wiw7Lo4m5vUdXZNW3K4iYUu2WxLw66VR7mi4DNBQjZV9J",
  "key34": "43PYBfb9X3xg91YAg7jnto6ZGk4siBRUzgDQSZ3SsCpkKCHF1JZHfiTHz8E6XgiXEBpocmKukANE7saekM6UgQa9",
  "key35": "3Hfc8vvrmjo8pgSnkyVbKZ23Vfa6PgayHXDpgiq6YnWbJkkuHfLRWHabRH5hQ22Xu2BmytPHfP76p62WqxhWzJtn",
  "key36": "9EX799jEBFWUnx2y3oX4sSLwqXxwGsGX58PmBJAu37Q4U9vNFZCSdYua3KXawmJzPyFW3BSkeS1ECZEtH8fqfsS",
  "key37": "2Tf2BFg3J5dUnPnTR6P1m4RPcFuLaAJ5MvavUVbYVseZ1vraxoyv4TeFmNNBTeEpQ9YZ1VhXRzc5yGi94M4niqc2"
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
