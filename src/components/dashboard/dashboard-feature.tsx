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
    "6roKDcv54TAUH1Usb1WDNBw2KXq6KviZCfsNXCz9nPbqEXQhqggBdcK6z1Esjeb93PEKfTGVMXYcsw7S5wHYSWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVLLY6Y4apJUv976fBo9948unFZCjEAuxqHtF4kTX1JE7sXzYP5xBdhMXGRnhNYDQPztp6vafj5Ze4JdHgnHn6V",
  "key1": "4tZc7LT3dhSTNkXG4BpkyAYQhJBSQbqAa2u4sgstzDQW76UguZSzyov1NS4xjXG7kATHWnijNFa6JycyFQSirWQN",
  "key2": "5xmGvtQDn9aDQhKvsCQoTDPFC2y4NJY1syW4M9XMzCBxszBbZLPAnAuQyXqGdY1Lq5gsDmCwQChrCXJcCrMfB85G",
  "key3": "3ncrtgYxQWNL4m6KqpxougfeSSrTwhYxiyQpd81MVMeUGUVfQMPSxQzo1rSEARtFXnTApMcNMYputbQwkdvaFcy8",
  "key4": "5BkJ57KLBRjxNTD484Hxyp99h7RdcMyjJMx17gcT7HB1xSgEFjGvAfnif3xcanR8qouZne4HLaCCX513KZTfNE97",
  "key5": "23uosJdmHkk7fjtbNdqJpiZuA1aohQmBCLvxSnGVCVViMZ9gjrrukmGZ6cTzQVaeJGGdc8J47gpie9ztpfytyx2G",
  "key6": "2t5GFB6pywY7psGFgPks7U3JgZJS1ygx2EWzaf3sH3FPyjxcSefhrZ411JoJfkSXWeF4jTk5WhUjGbfMkPPBKr55",
  "key7": "4JLQmTNdQbbT9NLMUQRrfW3d96CYtpHVN4Ad5iqD55arpBtwjirdLBFZaHP5MzsX96Ya66Zb2kRAPMtMDMkZmRks",
  "key8": "3ieNjknLLVJnSviLuKbvoMsavfx3CGsTg5QqJWppJ5B6GcNdVYJqwPzH9ATcDaLejWtGgtoGqaCG2JFQYijEmGVQ",
  "key9": "4h49ig38Rt4YyP95zRUZFKRsYqycVcHgnAq2eiiH7aTN7krUjDSbe7cMHF6FsVBaGkcXjbSSZMbRo1jVcoxsjE2J",
  "key10": "3sjTfKWx455im2iMr8iuzanVsWEPnc4gp6qsw9mGC7dcaj8KuTwcEWsjJRZWXxvsQTfKGKiyg6kmHSfufB8jJzNs",
  "key11": "2eAuuJYRmK5ghuEgzzhQhBcECw3wbZ3caZ65AenxWCw5Rox9umAsbrfGfTMCMfANxnpbbN6PWBKxZmfFi1eCBRRW",
  "key12": "dEUMMUSzVouSXCJ6mKxrXjrtiqP3R3Gh7s7BkTxEUrr7MW1E3kffZgpGbJKdZwKYzbLUitDGAhT2y14HDwL1KkH",
  "key13": "K54ZA9LAZNftmgiPr3ocY5m52RKNZCqce32DfocUx2F5GhW7F8XdWVSf7eKTnNbL4hLoXzvykUiaCgWXCddKZZx",
  "key14": "5UDFvJwnxJDWRZTTpxumxicfx8KZt9jBVQSRjU54iQGs1cvDgfQHZaAqQB6aHHfmNw71EZyVw7rqjae8mKSnRvVv",
  "key15": "26XwNMkY4jQLTK8jCrPRMK4ykr6CAhJcRVKJ3EExsBK1G9qhv3Afb2pzTjscrGGAfH8xhsynaMTy6YXstUvgpDc5",
  "key16": "DuEoYpkMWzf6Gn1fQU9smGRjj1vFVFbHvc7QjAoMSXkEsE9Md2UnK82NXJ3G8k77s9ULt1nnVKYSuMQGvuUdpkS",
  "key17": "5izh5DRGUP5DewGGEYYSU1Cks7ksaFz8tyGGuLw75uLcePf3TtRnyhfkepbuktqec15cUA5jcyDQKBfRLxD4BACn",
  "key18": "5r8bpEuaDkdE6VgqTqwY35oAyuDpMqBih56jQPdxAEcUjX4DqNExG6Wadowa2QeDXLxeLkphADk1wCdh7yv58BSa",
  "key19": "5KWHPirGwLBkmYfXgCiPYP8NKasFyBi5Locopc5SrWNCmusdUd9Ztwb7RPNkwMvor4nb244tW11cZvTbCtjbk81R",
  "key20": "4kfQtU1PGBom7LsbYXnjyE6jWZ9xc4faLDym7uwtoE3sDNfHcrdzCv8tXySCNYYcXg7MjeEFkReyJFWWN6EsCCn9",
  "key21": "5v2r5pEbcFJJTgtM4CdM1wLWwCw9mg1oTz5Tcv5YpoCSGCwugodfw48ijXU1qAj729ByqsCuTMdJhwAkYSjoSmgi",
  "key22": "2PcRjozFvNXRfJoCzMQdCW67cxvvJ7nj1QDKuVaBPBeUaQyn9BxqcGWk3aFPQej3JTkfqPyrQjEANPS3qLqzbYhv",
  "key23": "78zDNptJVKbnAPyNQBPYG4nRXNUuStctXe1x8X54rX1dgJnbaVcxnFvFk5xiLyhAZsCqzF4YdgipnEPdF4CVejG",
  "key24": "gcXBifr1AUze7UWcQoS4LzR2BowXaT3YHKnfgDHU4nMqpf7rAKU7kgbn1NAsQnzDcMJNHN7Vzf13fDMg4RN6x9b",
  "key25": "pG8fuUiRBiZhbkbnu1kNMP5BcnDXrajeZhA5yzeBqCRi4oPG2mDniFLwXFyrUz86ygeLqbhUhR4r3apE9v2cWuf",
  "key26": "5ZoNS7t1NqbwXTokCAQPPW4rTfZnFaUVfWCxhe7rh21fexBRDXjFgfH9h3ygmiUbGtU9rXK7H2Udzgbn2JeCdQnH",
  "key27": "3qzxWcZek3opCdrbEUeYS4LajkUWh3SGY5JWF6PEU72ghF7u4Bg92VELxoX79u2DB99RJn2sEfu8otyq7PoXBVio",
  "key28": "43V4rgLpScUxpQToMuxfzVNCqrtZt2UnaDFm5nayqzncEnA6wPGcxbexYFChvLcArBixZFQZWWWztxeiL9DywbMC",
  "key29": "2XWWkB2LPj7D8NBqq3Y1oiwfQi1MX5SetRxjffUJaBNtR2iXF7s84pT5NX3i3viy5CfoUjbZzYrnqZMAyPdYVy9t",
  "key30": "5dCgHmkRdHhdi3PqAHe3ziPRkw3ta3L6BP6XohCu4wDS5Tds5MpMAUn3v6DUpmhnwjgrsNTe1nKJsgD361sfcFtS",
  "key31": "3pb8h53KhhMGt2UKNUa5rS55NyR88eaPSHPeW2A7K2fqVLbEVW41AHaKvuWy7uT5rk8EWCopq2AuC5v8U3k3grti",
  "key32": "3kx11V87mRpd5KsJPfAGS1rbQ9wYGnXMHFuj2wXMDmVSut9VeP37X1s7Sd9V9MoZmaJGuqmdJJnni1dFbbLpLK8u",
  "key33": "5pLG6XQcURZUtQahLVDaE6CZMVPQmHBbJATMxqKSt9SBwnQNaievNqYvRLk2Yvx6uLnyUss5fpsp3gXJCg6AbnnZ",
  "key34": "4TrAfFo6nBDZqS9KTdwqhoN1sLLK2GdqPj56vWuKXdWTP9eqPaSN4knE9TACMeCTQNYFt4U4wTTLDW4QzojVXFxw",
  "key35": "5esAg956UsFXAT1B19FT3o2c4qpQNQr7wTPVqM3z5pk26CpYAmPKGWpY8i8i15YcT9UnPcag524dK9W1yuPNpJkU",
  "key36": "3hJSXin5FEe2PsUXhBNwtRhHViVGHCBc5K5D7yoSmmZcQP8USrnVTHeYvZmTBHhgbFiwtd8NQWksq1uXpaFiJzFP",
  "key37": "3gxm6DJYSZhQgUuGW4eQytKjatYbjU86ykvKmwY7kAr6734Fm7LJYGiZGm7ZPp9eD7ML7XnDUXDkC8oe8EBMt2JH",
  "key38": "58bQkADmLL4N1GzDZwi3eByD1kQDr6xv2NCH7JdneHRPimSK2Y2C9XwxvNotuYKwQrVufRCrQQhDhWoCt3WgbPny",
  "key39": "5yLuHY39gFzCQmnp1DVqtubpLRDUwTD977d95F8NFNFT9Jm9pNQNY9GRuwyKYTLUetis5GpkaK5vLTgQrSrqhLDy",
  "key40": "51ywHaSpqYXJwM3ZivwUSjpK1LM9x77A66RSndUKLEGEfs5oSQHVTThFoaQbL7dYfFoRJA93eCZBtr3zU7oVxEPL"
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
