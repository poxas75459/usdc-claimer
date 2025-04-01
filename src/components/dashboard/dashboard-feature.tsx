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
    "4A4Td1sdg5N6hE8EtrgEoVNc1VPuNiJDN7L7EiPdnUER7rsEfipRJqJxxmD2QiN5ag8H2QH1cgsqb73Mkk4paT76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irTfynoP3uerexUN2yvBa6eERLGCzyEGszU11wxUgBVbBz8ZCh6w3WxodDJmBRCFnUuh165a4D7GNXcjVRmdZBm",
  "key1": "aZVW89oV9yJ6zTMFiHsRNoTDMCYeEVfjJfcGPJveQHK6UJ8kKeZijboZkabBcPZ6E5FT9zQsEVu3zi7ayZeQR6A",
  "key2": "2i5ceo6KfmoQ1ztxVKRcPDxFMocBB7kmEwwbeMiuj8yhopgPBk42sC9KWEVKC3MDexuUTNkAXFKBnzJ7bTFCYsY5",
  "key3": "3kFFhMxdzqCwDbeQvsANb7JvuwVH17XGXc3L6NwZ9g2mL2M81e2rr2tuwNxNGU3pBF9GYVZZK2Z3tf4bGyyaYqR5",
  "key4": "ZjeX8zNgPKay4wMVG1myRh8Wki265nexwv1UM3CFta1wWT7XSeQ1pTwiyz2iydRh1axBxMPNTEWwaZQkvUXa4SF",
  "key5": "5v9vSwdK49PQ9fmuPDrFL9Mg4GAr22ZvN3Maa8m2YVFUTwRXLmXuDorTMphLZFCjre8fc1u3prA2mBpt1dX9NWnA",
  "key6": "5GKeB8Ki4ZRBXUqSCnH67CmpqX9rbRXMvQgPh87jUgXBuxurNcpLJ7XsvFQeRh5Q54jAEeaa7Mvp4Eerzu6W63mE",
  "key7": "3oadGa1WMDo58ECf8jL8VGzLK7tFspXEdjKDNjjPnd6cQfgo5ZDt8wb1se7skWiynnbyqpqLDgXsiuaB6d1HtkJ3",
  "key8": "2aaGooVbTvnu9GekzammMMsVfYr5QyuDXCbWd2d5Xmq4d2KjtMGWAe4evm4uW1nPV4N2wZ2oMX4PSh27hmvwgVHo",
  "key9": "52dAAdkE3JbzpDPhpTMq11By7MreDSQJ1Rh7N9uiuNDRyydFWd9t3bMoKjSTgb8VyUhmHJPUgBaYR8Dpif9X3Mxd",
  "key10": "293VWPCmHmDCQbkkKMB4jh3VSAHKR8CYfz8SuD2wuztuGp5GdHbo4Uw8MqjuK3afW8npDLVmBBHTLsBfwRr7KBRG",
  "key11": "4FhQsG212HhwYsAXffs1AcoaDGGMShRo5m5vHE9N41HW1YPmVDCY5jiFRQHZH5gsHm17JRKFagKihy4jyNzYhPtt",
  "key12": "3ZRHLbBvpd3mExqDBPRUodiMYw6rP3WjKWj7TCZUFzWRxanpHLCsoKw66Conybt93WKhR73cNFpqSz5Kv9cY2XYD",
  "key13": "5rvbMAbDpxxz1G8B5DjWwyQqzpbbss5EsCnJfBGMaPEzWe3abgy6zpWD3XwxsqTSTgDr8MRM5oUnTho6xaEBVund",
  "key14": "3xVL7nQU7CixuZqE2e7SwstVyYz1N93GdtsubHS9puBGDJPwWgbVbPcUjPDPZ1qZkjJKbt8ur8t87woGBW4FuJbu",
  "key15": "G4oxnzfheC9ra6hbysrp2oxetvuGTGLnNmgpf53PudVhukSSWp1qNqgMizanYhgypBTswqZCT1SZaNrsy8N93Y5",
  "key16": "2bxUxioUW7rCe2miF2n2HERMRjpxR2RBT7TSv5Cx8C2gZLCJ1Ldryyv7tf91aNh7Adst8LGd6dmUWY9MYCnRzdBg",
  "key17": "4b1a58FvoL4zsB7zkdxkGzwv8km5Yzw3iypQKL8NmbhfTE4okWkF8QPjjaB7uDhGMCfAdocvF8XJX4ihuCn7hk1t",
  "key18": "2Ah5bcbAiheUtSZSAom6QCmNh2yX25qMyQhFTkVyvbBzX52762uJUTQzrKQie8j7BM4yP3fsVg7KgTFSpSZtLhEw",
  "key19": "2h8JVG4uwKTAZuUBpwqga8ypaUeD79LQWRpC6MsNRjLg4sn1gFFUuZ6Jm6t5FvjtUGkScd1EnujSnFt4HTBZiPc2",
  "key20": "4uNzQJkZu47Q3iVCMa5gMHp2w73ejtdaaShWYwidMgUhzpFjqehAweszX59LHwg8FQuXrWazYyqHvoQ6jnfxKb4b",
  "key21": "5ZXXfWn4u1z5LJMPHodtG1FBC73LfUpPkhcPrtusWYCK3QWRATK4BgQtVFPuqTZY7rhmTUocAsRPXz1SmBHtGKYV",
  "key22": "4nweMVUX9QJoUArb41TcZJb3qX6Q4F7jAAG3uHkKQoQ13997KSTjoJXVfEYVGg9NkCMS3w2Kr1baRvNcNbYDeAQc",
  "key23": "3mhFjfAeF8jg4jTD2DkmZSgR1ju76CAAZqeeTCmuiBcZYVLaexPCRvgvUW6SHbmkBZiASf73F1mYfbMdTeic4azZ",
  "key24": "2zNKrtHgf2Q1hTVG16AmFWZvQSNCviKhKfMSirL6yX7hgzGAnQzTuis8fDSry8JviqiyRyyKAT53HoAaFWmjJoXv",
  "key25": "5ZnH6w66DEchC8zbBaCrCQDRVPcQDZHzUo28BQr9ZFwMrqatZUeqpJcvC6ubddWqWy3HATszsNbfdYCwLzR1PYHP",
  "key26": "5SUPQs1FEDbY9SwwT5KefLAR37KaeQPCXGZQ5ipSnEhbbYuoZPtrKEpHMfiMhx4ArGz9wdghJCePYtZDpKsH88GV",
  "key27": "5U8eEDFsBK6GsApPAH7ZkaSs9R37AFzn9ft1DNAhiVuQnU8jxBKgHB5G1hu1WRB42z6BTTwGLKYB7QTRL2zM4tmT",
  "key28": "zRQPkbG3PPGZtAmhYEhX6o4Lw7fV9D9TBjB6uK2Sm97bDH98roDQpoy1oHXFvgtNR71kLePqC6XC8xJEqvFmGGn",
  "key29": "3yQVHf6S9mKufQUS842JP7qPRNCeaP6CbP9di2TQP2VS16izhPDw1WoFW8tcLDSBGY15uRC25Vh88hXuqsUXkv6",
  "key30": "29Ws9xDLBxTGvKoaYaJZVWopBHNnbUZM1gSSqdWLj5xoUaiwpqGVH7w2qLWvAXMTtGQ3FXKZTvKHCoUGzQU3aewJ",
  "key31": "5qPcW2yqcgKmXHxkSiduvjsydr7EbngYTTtUuXYy7rDFwUaj7bsiAgnyNHaa5D8Lv8WRX6PB4org56aPfB8NtxKq",
  "key32": "5poeAUaWJT2jRSthXX2qfVSAhni19oy28JfpcCdeJhg5JFgjCEFxoF9dR4HnWbVhcRG4ZM3raWSnwQzrsDN97RGw",
  "key33": "32oP6G3sPRHRYBqv8z8UzVW7i3Ett8L1usEKGzwmT22xAJfqaWD5J5ts3aRY3oWqgoB6PxX5xpBFhAGVrHyrG2au",
  "key34": "5MZLuEcoFRp73mxRrZrC6dURWm3YcHeZZbh7huYGKLNbGPzjvVgpMABQ1fkXW5eKVJjav2V9XVyPEGhWQ97PEC46",
  "key35": "2mo5YRBA62uTnwNsGsVd287oDm5BGx1XMm1yZng66gkFoFZe3F2ri68rXTnaXvZiQ8awk5rabW5NA3hdRCqee4g3",
  "key36": "4VdxrbQBm1G7J7PwDdqW4unwBhLPKoeYApoUk535nQggQ1TXnW3L5RSGfg8rAkKebtP86Fw8bncoMpvALT37egoz",
  "key37": "5z13P8D6YmcBd6pf55bwU1fWbx93dCZ4dWRCj1PvDCLGzTuCmAzELq7zFPwwSrMrKE7u4D5RTzH2eryrjdGnazzw",
  "key38": "2TR1R6AvJDJkQPKvptDu74JJKE6fVC8YhPAmRoAKMk9YaiRFxBqdU3qTAxuDi1ovpcsidaf2znnCs2i8D4fLPSpV",
  "key39": "sowz9HnqvoqxwcoLxsm9b38ePajodeHFQsamuQJT1Y6xJhWn2f9GdQ9B2KDEcwXSNSiHcVAktGZCdoHwt1PTehj",
  "key40": "3yp3oQows4ey3PbuxJoAx6VxTwx1y1HtZyKtSVB31nqiGkCy734JTAENcMbV2TtF2PhE97dLmkNujTrmyNrfVzNS",
  "key41": "3ZuVSysEjsYLtDhahn3iUg6PBpeii4tJFepXHZXPDAWexFFngd4iHP5MNepfKtmkwhKqKpSfEv5yGAR8cRkT532G",
  "key42": "5nBkunbuDYuqgJvyLTpmhtoTp4evLc3wxgeUirqfRkUCdZkmVhbbfEc9PVPrFVMVc41nAWoL7eHyHDseaPpi4RUb",
  "key43": "4phucmkPstMePNBZKZCJnqXh5vYRPmY1xPawo9dTH95E9cRbwUAthCz2Qqad6qPQg6rWbSryK2BNBzgbPJybxiFK",
  "key44": "217BrNKQF9AJoYNHseqQwHEa6YpyBBSTJVcjNbwVjp1SkvTcZaQjBVZ8BGrrUYoFfD1SsbTavRmRvDRY8d99paxc",
  "key45": "2LfEB5FmWYRcb39JJaumvyRdv2VH5489QiHo9tC8DzsdiKNKhcxEbxhRQVtZYBJCdmT5dz8Hi3XMgCSVtygHjY5a"
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
