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
    "ygMqSmMC3SzfKcgR855t6tGxkN75qEQ8Aoq5GnGViHhcE3hNdBCJvuNw94qu81RAbZi8Eko92scyoLyGUFDJVnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UZrb8Hbmoh5c51iMtS6HuCr1EN6VzhvQCRtv9NhUKE3fyv4xujqZ8H3U3omfXqqdX5d5qb6KMSvBceF4x8xwfCF",
  "key1": "5khYyqfQ8anbzhYZ49eUScnR8KQVAWGgdCiT43dHqpVJkRjhEgtUUR2dou7mqnhG82PJj12Ezr1AUXd6tAW1JYwR",
  "key2": "3EtRRdU6vRpEXvjfNyo6xQkiwRhjKRuRi75C7cr9dVVREicxzAkY1fyPu7jVYyWAc8bbi25pF33k8qa7QxE9MuLw",
  "key3": "28VjgtruCLouK8MmucL2YQCzFrwGsdRtFBfjYA6en8LEiQjXNSJ5YdjedJorwsBJzGfHeMDDg8todmW6YiWGexns",
  "key4": "52XYTmitkPBgDDhCTRSmguF8TfuUPwW8PTogEUvdbibXESDuQXzTf7Wu2VaD2Uc8W5KhtJLAUWgp1jUpuDHYxqB2",
  "key5": "2uzNKXmvvfLkiJXAMvv82xXVLuQFHdDLaebJym6gPQWCsAsKkBkVotyxY5dxfgEbGCDEt79i3NUTuCKDBrM9XCNx",
  "key6": "4mZZvmSZezbXkbho76wPxPPPpKx5VwFJr6A5S8CZrCWzdLd7V6RYU12FCJHMc8ezUov2D8rfs8F8bz3cJdteEkfK",
  "key7": "24bpQGc8QbENsmQdssS5Pb6T5FXRC78CTXAS8HJZ7tU2VSkrW47AiXAPEnCzKJW61rfQQ9eYbkxRLVGp97Zww3KZ",
  "key8": "4tTWhPBFH1ZX2xnvLbDb4QA3U84xrfp1cf7SyPeACRkK39doszr93amR79MrvHQyqqoC62w9pu7SVjqXbxSVc2xJ",
  "key9": "5W4Xm7MnzVSig1FEDXaHTRLCn6qgABx355WboQ4AgXQ6JsgzbDKEdGBZ6NzBeS1rJBZRso43xBBxT4mppAkeyyJw",
  "key10": "52DPbTdLXyhBzgiqYetRiZ7ZYrffhhrZimgnWWpjQumDbMUR1pZDKR9ipq9p1G6PngkPvXznUEcD8c2rKiURK7oX",
  "key11": "3JKXEmnYKkkWayCTJVqkgDZAC3RY8N25Wot1RcApYrTEGprpskP1eR5JVZaNitKTXjQg4rkk7X26CMVnJ9ZYJMAu",
  "key12": "517TWMGng22wP51nDgLppUzv72UJwKdGHby6JaSEAbJUBxm2hXmjkaqdWEWKzTkHwancrKmTrkGThEotNrDmw3Sn",
  "key13": "yPWtXiEfVzUpJYaRN7pXF9gdv37fis6Xa5usbRZRZfe9V1LNWss2kshE1pPuGv4J8AjB7AJqqSCMbw9bfCjqSBU",
  "key14": "2eL5nRJUiMFDhyphCG1JSzss5FJFCRGEbrkrxH2QtPxeQYCkZg46iMSnNbUFAmFtZvQW4PgpcqrnYungNKE1vdTi",
  "key15": "5D2BksGuyHsrmrYLxmZiPQwtRp4b22fzVahtEGjyKxQh2CmpVnC7aLkEtJd7v3FDkvdWgtCUwG4PWLdYGRhrX6A9",
  "key16": "27ZTYbFESdbs6ej5C7NiDjHoeuyNt4xbUerxJKoNQxkzAqed4pB77Wk17LXF8unLK2wnMrwaxqsNTPD2e1a5N8wJ",
  "key17": "3XSyLnv98eanCARRm3MJufbucCHd7nPNL2G3PadwJC7v1Hzdve8BnwkZhzrEsrWkz61NDbbKwCgo3bsEdqiLoJgi",
  "key18": "4HnVHahyNM5nUB6g9undosF9XZvckRyYXfg1FMXhvFNtJNb76zZkLqaHTZ2msmmyPzLqVVXPGrkMACensLjsFEc3",
  "key19": "DABt7jREBjDKF6u3N3pxWKj9XyG6hDHQEA3ed7ej8cQc35fVjSCA7YEyZ5mT5ruwwdzcYYpxQaSFJ735CJrPSbr",
  "key20": "5aRyvVkfkPs19KiBaotyy1CgZ5H2tmNFdvu5dNtUs4zrjCufyC8BEEekk9FcDC21Fd5E57xRK5eu88619BDczV4P",
  "key21": "3nx9qiNcVnBmGdsKWpYgmsEi69GQBJeUzKrckn2jH48zJbPPSC44icAPLCd9aRtP2GTtjyDE2eqohtoSzUxz4279",
  "key22": "4R7pXHG1WUoHMKY5odxLhGMagYgzfic7yny7rf3az2QG9ZZF6Nca3527wk4CwbUXVqbSu3BPD4WtvwjHzLfWpVfa",
  "key23": "55sermp1A1zBpuZz8JxqohsL6pJBJ2quAguBJsZesPCvakw4DptCW6z4J2PsGKZ4DKWWivvpp3cYhqoQYRpA4mkW",
  "key24": "f7SdNdsEazqavSysy7HxmR4AFwkqhnSaJTCNfAmwd3dSoVt4iv58uv2YLHByuKkBcJYQkLACLngqWo1rzssFUCN",
  "key25": "3NvKik6Y6iE8kxF2WK1jopHkkKWUBZAgufSk1wzV9wNHcGUqSVTL6YMbkTGNCJ8Q7fYCmByYAhaGvBM6Fjx8Zb6K",
  "key26": "2ZeVfudnsbbDXWzrfavSHtCqJQeFHRy4zeXW3VmQ8xv3U275di68ekmCN8NzcboLNwTMBs4PWoHwsCL7dxM5Byqv",
  "key27": "5A1qsBwiCaCXkrnT5doR1BgYERdKYK8neD5vtuB5Fhs3z14kr46SdQN95rynbFAc3xc4kw9R7Jo7ypmxY4qCva8C",
  "key28": "43sUsTBJwa3w9QKAm6bCYQ7GSzuoJT7E1ccX21JMWhpLVfYgMkNVDiXTzH7YLd1P8MSgSASNV7gv6ECHeCmgCcsG",
  "key29": "2VsF3YNg5bFRT9Vq4k49jtZwcimpLiy4A1c5JRZgCJry7LvFKacJHV9aCrnZNFg4KLuso5bvmzGTzp3TpdVjTRJh",
  "key30": "o3QDPnQDbTW9MmxC52B65Q4wtdzXDbZHL4PCbBe7ynRvUVRWRuXQcyB2m8aG7KEB37RV7zTdYe6ky9Zr1zq1gpP",
  "key31": "APxty7bvwQHrATdkFFJjMwHLNCECsBDKrZz1kopE5mH5NCt9no4cLonZX78vd7zbMw1xYvgUhVk693EnayUrmsR",
  "key32": "621Hth5v91L8StnttwmFTcbEGyFQ73XYZs5X7A3q3BZChzjoPZM8RdM58gjwew2gFc4HPYStNDzeCk9NL5hqSCab",
  "key33": "4omNbnkyZHyuwZi7BY6LdGeYyhg176Lz9HT3Fezz8BPdogS9t3QTMgMrr4D1hv5Atgro59YbtKUsmtKbkDuKWiaL",
  "key34": "5TN2df191fFNw2egTsEi5cREBa9cbUJVg8mQa85to1KAyGUWpT3UqJBfiB97219m1yi9FZie32hNttTASXGBDtNa",
  "key35": "2Y6D1W4GCatj7BYgxTmiwU4VFui8j6QagnDCcYLooo9AKjXhCt45X9ap156xoPf8h16CCPDN5kLhdye12S5hNgR9",
  "key36": "s96jdXyPWuf6WsPDCrCcqSv2pjKBfq6zvFeHygdzSdKxekA6xvk2vzBzSm47btdpNfYW4T6qGBU2jrTZDUnLxmp",
  "key37": "2ygUHeocja4JvNKpmjcjPJswSggGBF4EnDyGQ76Yfv6ACAdDz8AjsSLz1cdRYFrqHzMZyk9tShF2bWK67UpBFcMv",
  "key38": "5YArjRASMBbgVnGartNGdZA1cEXwaHpfpRLMmAvp8s4zx7YqeEu8rh5n6KctiN39ZTXB1yKeAkG73dcfcVrt6YSm",
  "key39": "4DdC88ZCpE6raMvoQj6ht3aFcvk8uu4oJMa7eyjWAbv7UZFBrz18hRf4aMSVrbk8nWbiE7Ed5oJkTM5ZJoqZnUYq",
  "key40": "5HkaAHZUszuPr1bXEcH7q3wincfSdhaqnjGp5sNDYht4Tf9G1Gj7hhwThLvA1t9HKV59LeeCHj2FhdiEnNr2tGCW",
  "key41": "5BWHhRKkyXC9wHMwcggbBN9BMdvXeJg4mvXtGEMhUije6Hwh1vEf7RhFHMPauFnp2LawKe2CnXcPjPLMLN5jxt6V",
  "key42": "2iBjKwb3dmrKbPf5SBtxFNFwxoNKxLAZ5MfnSRU9C8XgiHp931tzG7C4nJFyCu87r8mBHetC8j3hbb1hJQTLv4Tf",
  "key43": "58aTF1F3rPYTZ4PpaMqwo28gpai4PrEQbGZveqDCHgiwDmZAtqWwYBS5sTgF6A9BMWRcvnb7sv5swnAtQP7uyoPT",
  "key44": "G9rGsWdjvdvDZC9GUbGz3C1xhNNRQS3msEPuuFvmnKVi33t2RY2VVSK5CAaomQmyLNXmAGQbPkW5HnSPkyyCUq6",
  "key45": "sKdxKQWec3sh65dFzzyhSNv8xHqgDCByc6wFZFackp61zjSvLeuBVsjZvMH83X4cLZiJv3AT4GrWSoQ7CfYhWbL",
  "key46": "5HgMgQeZRePAtPvZGEMtVYyibGyJFDJJghzULTNKzsyZxunEuUMtbCufRq7PZC3h58J7bCzndBUmHb62XGMUZrxa"
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
