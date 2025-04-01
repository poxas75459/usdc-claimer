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
    "vEoN9re4rpTvYodrZWq13tsvYThnzL66UrgVSkKWiB415NDsMwur2QunFYvUb3DHTmNaQTrP88uVFmUzpWxHddp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59X34fSoXRwvJ5fexGZd4hfsxNe4pQ5bDg6MCRrEe3o9bNAsdRZfY4z8iKY93GToTGLXLX71JeadwQbkdKFxDqWd",
  "key1": "4XersUYbPjcpu375pXjWCYTnPUj3wCXMd3TSMBbuz4H3dqY92g8nqFWeXrRkrStNvBBRDwktJxNcQRoGGMz8VmrS",
  "key2": "x2r1Zn4dJtSJHG7QJuUYKijEhYbezs4hMSkwZEGA3bSc2ojHRw8sGbi169RAh6jTxm7HaVZEXddudt7xTAEXwbM",
  "key3": "5Ce41Xf9tDfChVgqegDGYoWxKd9LkdrHYBzwBFEb6gnsvCFPx6HPzjUsYxjjh63SPfsWYCPtiyr379CaKJTC8G6n",
  "key4": "2bCFecyvVCpWfH2HUWsy9agK9kmm3wWsSRc5pbP5aNba9E8ZJpSVguuPkjV4EAryi9tYz1xLWi7TSGwzioGumDCU",
  "key5": "2qaZgo1K3p7vhyncR4XsVtaRm5YABhqxavUiExPZGjGXHq7ztu7YUtLoumgpXU9Yo7bJJFL894EidFokqNXrzKbf",
  "key6": "4mmzzqFhmVqpBr61YBpc6MdmLnyaseGeevGV92Br5oCaph7x5r6uSxz4jFDMbbENdPKHzQxdqGWfoxevUpJJc4oQ",
  "key7": "62wbUEmsTDqwY1bCyqDu668kfSdb5hJKDKZKFf796rsFy27bFeXq4Ejt9WHVsKZPyTuMoUchY3JiGVyGUHNT5gzq",
  "key8": "2E9NL3sMUWQUhY95FVi4ojHApWxrpnHX2jsgZfsXZugTUwz41WfMr1vtyevbv6iNFd4PuFAwnYEDd1rApAXUyp1c",
  "key9": "3AbQXU49d7LkKqVpzEfpEPvZeLq4oTtQCRxgpqNfJ7gLxUCNaBX83iBBeUmEDaAgf5DgfLHYNAf4Kjt6q845ucik",
  "key10": "53CWtEPBCcqaijC2Z2ioqiDCD9NG74fMQgmJ6t1bpTAv6RVq5zbY245zmBR86WZyameXxazYgYQin9z6LuHMz394",
  "key11": "48GrLCVnQATs9bHn5HvcoMaw8QndhHptp1BSnry2Bxx86RnHdrYLJN4cL5AJoNtPAPyxnKf2apaCZTTot8Sn7ffz",
  "key12": "2fc7nFuSAFDdKPVEE8ubMUiJUQBsTiWhvo5qZVn3VmDMwL8GD3dJWQhowyMWjAzfbnpMG2PMQrYv9gWcHbPhYeqi",
  "key13": "2UG5wD1Ru88ZZ1G4TBkYiTiGDcMzZNvYHuSnL7acN7AvxyijvTgPwqgXkGEvKKYs3Wmstbf9w8wiiKUKXKqeoyWx",
  "key14": "3AmYqZrFYg341bzPoFscUPh69rA2UHvUiM9nGBgS1VDLZ6u5Dw3SVEjSWd1anUt8Axo2ZeyVL5CByuHHbkRe7AXh",
  "key15": "2uVVWScAB181U3d2a5dESxZDKpFmrNia2o5ThNr4KkBrNMWL4tEBxYqAGaoVJWaa2b8u4pr8vGwXxP46iXXTERcy",
  "key16": "45PsaWHE2xS3ybyuFm4w9Z414vcyrrC83iHpJVaS5viS758ud1Rnb9a1rk7pQT6VGTm76CLysFYjMCwnm4upDzZc",
  "key17": "3yTgMPQUJu3aaNLtZijN9CxxkJvhw5TKTSAjavBF3fDUDMNuYQ1SyeuBaJiV3SmHBXAnJ91kBgKy89LJMVXdMjxK",
  "key18": "2Hq7cPjUdN7UuhvodA1Ze5926wVPsgtT3EnTUFTEFU65jZNgp23ceP2UfbtaeeD5nQcXymx2Zpx1TvTQQeA6oQ89",
  "key19": "3e3F5kciY6YpJiiFNrRBBjuvs7xE2JW65hizEPDoZKkVA2SWUAzxjsB5WdsF54TvvneUEhn9fyuYzE5mZg5KXV8b",
  "key20": "2gZAbojbbnapkDjTnANippvu7H6NiwXW9xN5ACPkwDyaoFdsZjcJcCkjiJ8EJLD2hw5maYTnbmjmZYMjx2aXS78c",
  "key21": "21X1wce1zg9nc8c6VTmcpp5kEUZ8UbPgMLSxafVy7J8QhmUbhS6rEULAGEGZTL4HHXxD1oaCk1hjmDgN1TavGBuK",
  "key22": "3DMsGGd2avjoWpKjVr3pV3zQYKGzGPLVsZLnFdmmiWeEMyP1fvSFLpFhaH2RS7zcGgDLyyh2VRdxSkwzv4yRYBad",
  "key23": "TyDooz7TftF9kGt37b4q6RCnn7xYEz7S4xkV5u5EX7HM2Yi4YE2pNYeriVTB4dVEhjp8oFFmYp6V29jEh7ZdsXC",
  "key24": "2XxbtNdwmQ7xwEfy2kYvCeKT8yK5wseXnqtju9NiJZLoJtrLHYn88m4PaTNWzLxvvCgoivXWUs76mw25Y2WjZWZt",
  "key25": "JvMHmRRQaW54kB8mi6WFQBPTS4K2H3iBry2yF4n3YVVLk1tmaoyjKLC8q6DgeZ5AJndzLEjrTLmVweJ57ESnEZu",
  "key26": "2Je9ahtH81M4KpmHDfEhWSwAy3o2MEQcYDbvhxVwUuBuqxxLXQcDtpWRUhxxP85kA98sey6iP9AEc2higJFeigje",
  "key27": "P2XtuKjoCqSpJVU6zv7Z5yiiQ65cdbCc8Tj96axUCDG9PE5UDAuVNMG2r2NUo8Zrt2xz1wxumSpBQGnNeAkAjVD",
  "key28": "5bNjV1ZRXyrWN26Zrgzae8B6ERaHRCudp2GKMeWgvUvTqPkWroGjBJSc9Zzn58EtrkNqHdd7aPyCS9bC7Gx923ch",
  "key29": "5JqkPADqXNTBi1Hokpha2GQBztAqkCjoyzGa886n16DzMYG2DUJBVDqQs2EZy65a8jRPnAgp2nNs2FVQo9FghANN",
  "key30": "4dCABEsueB3H99MRZy4VNEAjowjNKUftdL4A5o8Mnjb1TrA5mzSYvtvc6k4kBHzvFfuGUiMCi1LqZU3vG5ZYPMyw",
  "key31": "w14uUQS6JcqWFRmQ2i4YkYb4sgibUZ1L14GC2Q7rP9QDi5zFh8n2Pek8msGfTSN7RjTWyEYUwTHLTn65qASnoRG",
  "key32": "3iLwY64WLzbBL1yE2AxyERcycCi2nkPDLYBa6rZYzBQDH7z7MmzcRrvjeaFapTtJsnDvN2VufRYVmwq4ycQbLrEv",
  "key33": "5o7NT3oEsuPvCE4GyBypNx4gapnCon1fEvEfG3iBfr3j9zeyWMr9QRWiG2TXYnz7xMczibqfFcuK5VfmQxSMy117",
  "key34": "VtbNeB36YGbGN88ETohkPvWj87e1RQqUaVfUNrnCFXqCGFi2asi98zjDwcZbVRT5ojBvL1xu3XPS5AbHsHB1vys",
  "key35": "25i6u9KWUFjQx33fxBuaTUc6hDQs3wgRnbqRK8zbongUUP5jCX91EccMiSGJaeckgm7a9engQMQUqg6F4GPEuXpJ",
  "key36": "2rZ8jXBQT6kijfbKJbNZeouAgZec3cgJM1kQigDAnjD9jvqiiCcQZ3KFgiLeWX8V9aeh8uDHmKMkvVLXFmga16oF",
  "key37": "3ZCCrdKto2xc7XNpwow34fgrsW5HDmPcJtp4YUEN33tmwzvjPuYwq4FHKB6KkRXaJpoWSjGkSVRFctct1jbkqgW6",
  "key38": "9sQPLqZaiRotQYwhBv9cWxbHm7vrV4H5QJ6evTXdb6W7Hnz9TuRN2QnMbvQfC2RaJHzExg2D5nXtboVwxf2aJsA",
  "key39": "2pKcYjkMSFe3E8NkT38Bq9hSd9WTMo9YkLtvP2J1TXwnZb4M4oL7JXTBiXhRikmj8ZArcjwxzKL2fMYttvTRk5yd",
  "key40": "3LPyHU9obgWSL2AmgV4QopQB1wxM2Vib2Lu1d3QDFtBhmtHApVQF9HevUwEkHGFyFpLCcMuUZzqJ6QzYRyNk5v7Y",
  "key41": "4RsEJMEW4m8e3tzpNt2oDDYxEhR9aH9sKNMgAgz6eAe9MmrjbZMErTn1TYcptsT62nTWat4bTLYtNiXBBn8cHRZr",
  "key42": "3sVfZEAf4WQ5xP62YLJpXx8o5irfZHJQ1xkpoYQtwtkvJsjYiFsv2MYcUr2KY4jau2AWFTCPAScWX48HAYtj1tja",
  "key43": "hSPcsuctBkpGtotttwHt2mPGp7nB5w5nUpdUgacyNKPDJtQGjEkmQE5xGpP9svSFMJsoKLJZtDuCkxng38eov6v"
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
