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
    "51kPTXppATFWUVo6VSUoBnFN1d5PeyEo45bSbsTuH9JtsjmvQuaCC1cRSAdSeyvNr6U6kRazZASkesLVVsNoMFKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UBUVwZEeKsEHYFKrBUZUAikQb9DizKxDNdEc592L1FejX7ofLN6PzNG17oYfnZPCTueCV9RBndMJqcVHjpUdg1",
  "key1": "3zLnigbUQzZtGGdCmKzo3Efm6zMpYmXGjSqMZrypij4vESLRoijWfqwSKKvgrVcxQMFxLavm8RhetahVySUMMmEF",
  "key2": "42wUuhdnExoeFcvr5574PeHujaqTe1zudAm65mskAJFEDyUX4WD66Fob2cwNvBygMkD6MRTwmzdvqVZ7g5EBYvzH",
  "key3": "28tZknzdQar2D71gPawt1maNJJ7BmKsksfELb8c7Uz4AQizAP9RNRuwpJXoaiFvi6o1hCaw4ZzfcNRYWuf6Es7w3",
  "key4": "2hrzvhWjg8y7iu4vXVBNr5Z2WZLkBp5LPhR7T7rqEqDSemK5aVEMAZD3KiAuwNK6ccgjRcV1xj24p6R56kATFQki",
  "key5": "5EpEApb2foXCLAK9nuXJDsX6vY7SmEbo1RDv38Q2hNdPuU7qRpR1DtLcAYSE48WZuMRamqT1wrvTaVMsd7aiAUvZ",
  "key6": "4kcobLxqvR5373x254vi6fCjUhnBqGnhGbwQMS1eu4oAvZhkK8JMTqPBtAkgEBeGMKRqmbXSPcyutfJdxRVGQ73p",
  "key7": "2Zd4kgv5wDKu2XXkCH9mBThBSSS6Cs6oSRfGFfxH249RYCPccgbGNfpwvcjpvv8bfeSPBDyftWbnR9eficweUFk7",
  "key8": "8z3foCdEVhQ7kyhRs2dPG9D2jvupeN9sbJW9wr4yKPek4ZYuMQ5rfPq3oEpCf2JnsmAXYTWZYgkDh7ufphTj8RE",
  "key9": "4yEG8uiEhJDrGLh8HkDLFGjksCzDkeX3SQV3Lb8NC1yF9D4YjtGFU9EP1axMZRtoBg6UvFkxmjcLXyRuPBxjaNHt",
  "key10": "2mnsPLjcH59ENaDA2D1zCxDUSP29VNyT7muofubtcxqQWpiSmJoLRrXH53n4G3CBVNP6kWwduE8AzsJpBceU3Bpb",
  "key11": "bajxJvAVKZp6AijX9v5DxFAtGxaJj7Bq9kMKSPLYAcjjfyTipgmsD5AE2YZ2DWrhKaLbKJ53FwyMShjnJ9kKJCf",
  "key12": "43odfE8nSB4WE43qrQ4Hr6D4dGgd1WbdfY9rE3nDym9pKDY1Bs4ZAe9LUA1HGyXGSawFpcJyXe3wbVeGnP7mZozb",
  "key13": "5tg87xAVYDAbLxJUYCABVMfU6Rj3RmzRuuEtAkmpyW287LtfAVSsPSxBdRgTj9fMUwretauuqVPwWve5w5V9UqLW",
  "key14": "5wkCes6pVi4xUyhpCZiA6pcmqN11WcsPC9FLH3ATSpmJU5eqUZrPtJ7SWaib3eiSGkZ4CizzL2LZdsWSD5Eqh1VR",
  "key15": "61sChEnu7MpAaveiGWptiJTy1GFmsqawTaLxcgpkRyhQRUGZxAwYJ71AZZcwU9DwPjRnnS1jFnnQ2AtwhAxQ5pzr",
  "key16": "xAgZ2UxA3mw5xFCxutsTt8UU8a2sCJbdCL7e4D53uMUh31s1xp1QWQXFbDekYVPzTNbqXkeAoktrgn1TEwUGmFi",
  "key17": "2YupLmnHttd3K1o5uxAcjaMGAzc7yfE8cyLf9X6Ldk34k6MyzTDHwYFtigHU6qd88JTGFPSCLUuUeZPygSh7GVfZ",
  "key18": "51eHV92H6v1GmYyUNhAHG9jo23ESJdpfAwsFjkfUFfvCSddW342AMJ3HN8wF5PXP5bCvTPdY6oXoSyXr3h61Ee6r",
  "key19": "3eQrPgmVjQbwaDpAEqPhc9oj2yN3XD51KxSGbKScuKiVEduqEhXq3ZLru5ogq9KhiLBH879NrUE7U2TZ49oKbFef",
  "key20": "d7oMBKBk2haPGUvjsARYEch2EA6jJxkksBTF6eQFYFJLB41mTkPXUWLJF92iQk3cvwYaChfgsHBvCyK3LHWFvGn",
  "key21": "3ojeCmn2wn2WsBvUAJd8rXVgQwUkQDPtDBsqM8YnBMWKK1qYHdjBQjJyMkGdEqyo1iL6qGyf1VK84ZDL9ZzQV8BD",
  "key22": "44A4g9hmVTuzrEzLpfH9uVoZRd7J7i8MN7wr17GH1AA6pbsXSnNwyQVoRm2ZtFoRy15gZpHoims3QgJbbK8rrVFP",
  "key23": "31CDQCtc5oMGBT73ChT7Mnf4n1zbk9g5dKH698rbeaeP9d3jezdBMsnv5D2tVhEjLvsJPDKGEsVfs3pfXk7qcYf3",
  "key24": "568EJtW7BXwA6nGnvAvUThTBSsa5SYZBB7CjZQMSfj6hJ3dNsEoZSnezrdnptZoSk88AKN3p8DcqWaCBSon24hSN",
  "key25": "2id8jZ5c3bBnireJLmmWG6oNH44Gk6U43qC4xiM8XTcyr6y3LGsBhBX3tYuxLGFjkvGit9gAhAXdy3HNupoLZyfk",
  "key26": "AoHuYtVqNpBsjMacn4TVwo54G5aeo8xxfuXd4CLEEoFpi3XPhQxqKw8QTKnrbqRjdkeVqpQNF5gC8YMQTsGFgXq",
  "key27": "iNrQPnbbF5sHvyqSqqjtBQXgTFpREJxYNC4Nb2j7Nr5XwtUSS9UCN37PZxsMQGixyQDt3uZJy6cQNLuruaEcpMj",
  "key28": "3S4wNdWoW1iuhfbJdJsPq7PCn5fc4GVZGoauNvqXyuwDd86pgFKwojiUxR2RmTJ87qqPgdMreL14fuiBFwPuHPCP",
  "key29": "3pTMRMRxY6eb9VkqL5dKKr3X9W8CuNDnDGnXprtKSqF55jpCDjyZpUUEB4gMEKjF64q3W19YkRnKFGjkTsmp7Z85",
  "key30": "2CiMimgaidR41eYE6QRkhqKwcHdzDeBHcTxNXLnr8evvriGVb9Niy3LCaXwNBQGCKXU1hTGySRRbmKPvmFoGKLLx",
  "key31": "2n4DwjUBdUN7pravRknojtJjuTZ7KBVJioqqgs7B4w9jQzCfdfDRGrz6azrMYZMVW5VCCUBaenJrBekJ47XDraFN",
  "key32": "4Zq9z5X7Dh6MKm4Ugn5TLXTZVQeHDhc5kb49jkxsb1BcVpkYsMyWqe789neUU3BFw1b8V6uWNSmucw4hTF767DbK",
  "key33": "m2KPyjnu9idcdBfZDMKL7MLwgDZn721KHv9sjzJhpJa1FHnR9GE27bbGWG9xcZiTziJzZko8nq9heHCrKxspwK2",
  "key34": "H4TXjG1FZwegDMpvVFQc8cbWVry1xpCn8tUpFac74kRu3ojWCdsX2HCYkgQqcVfjPVCmXSC9zERiYQRgYWrgkKn",
  "key35": "23rwT1okTQL1UP9GDeYHozm9LrE5XYsZgABfVqBdSbZnH71VY2dgTXc8Jjg6BudeyVt8zRbYyYH7wtWVSjK745Zm",
  "key36": "5njW5W1QJ845R6Qjb4p2NH1D3wcMBzbxS94m1WVY4SLp4w5RphWM32dW1y9ksqrMpHfLY4Ez8h88uzjui1bqxuiN",
  "key37": "n9HzMkXDDCXrQLifo1EiqJoFCJcsnj9jwySNVmweSh6Kj5q8DJrTjN17TiAsJRzTftJJ5mhHEHvEeqj85DbXFPS",
  "key38": "3JSAWRLBqz41smoLjdeniZUnRbupiT9Qor1vvYfoZ66p5dCwDDLa9VE1k6P9wjvknyeoqPiUCJerHsTPvFySHNkQ",
  "key39": "2o3k78XPuFKNHjNWVoGQziUqjjiCLP2G9xih4m4EUF22uxJ5D4zmayJd1Nwqg1Dd15Efgv7KkRokF39YTxR4a6f4",
  "key40": "4CtWFRtpcQ61JpXXdDamXAtYZPQoyNTDNqYEoikftPhP2s31rwXiiQYLrf1uQ54TRAZLDPkYm2Xv6jUiH8fWsF6A",
  "key41": "2jJcETxYTgaRADgojNshvgw4Q2qzJTY3u2m7WQopz3WuDvFKGUngqKvJvqgufEQQEdhmp8SYhNthkg7wedKwhftq"
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
