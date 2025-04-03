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
    "4a6HowrD3HKhfskW41GwjUy325a9shv9qdS3974sGc5EG82Xjpv8h1s2JWS8XPjWzxSbomWJfsJiKWTy1HXJXWHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUu7EKhMZizqiBEREyagviqektP1PpmNAqWJZ7hmK4Lf48BmVaJeSQcB8VgdgtdvqzysnzubMAEbZJmwiJjhgWt",
  "key1": "51bh97ApcVCLP89xFPY8TL4GFzCWRRtGMs1Xj21DA7555vsCGfQcXpiPxXpy6MNo2KhTNgbCG79NYqp3SAn5xVKZ",
  "key2": "5ZZPAQvZd78Q8UWXA2mG3pH6rago1UxhXQqDsaRyfw152owdC3qJC8DL1DWenPpkqXogBvR2pCmfDnjV6wUuoaE8",
  "key3": "Eig8ADFzRa2jG7u8iG6TLgr2bmv6PeHTuvSRPo2XYNoWPWzmyWyR4EMs9pGgHNdMcpwFEMQNmcPieQzioREaniF",
  "key4": "3KB3HFhGTzaqz7zi7pbqkN1JgDijBLj7ca2oxu5HZmHPae74eG5yCZYz3BNxZDYMYbt9nUTPn775T6ZQeRhWGynB",
  "key5": "iDhs427PKGcZv6qWgFwJNB7JL1bzpHxkrD1a4rku2GRj266B81vP9UvbHrcoqTBygNQDKK4neaLfpCFLnD8YZgu",
  "key6": "2wqPtoLawNoui46XdGgH86aeAUMp15CJkWpP91QtPDRgfqgihUv1Lyx9iJyAppJTMNMd8VcnnmUXF3zyAYbum335",
  "key7": "4RTigxx45wzmfXXp8sCHTKL136EDCjnXgG1VxYwe4twkApxLSHuyhykjU4vhxmy3dmNpgSdyXuXRn2S3ZaQoqyRK",
  "key8": "3eLjsDkhU9RdXvAT8hefwF81n8kM7nrd7FUNVEZuGxmGPko9XAvWLvHzsPeAshprmWcx91LmLLJUHj4AcQ34N7d5",
  "key9": "2BEnBB9wW4rJJ75xJuBsdSTutCjR4oZ94r8TgwBw4VWHekiYg9ZHeZhx3NFVxWzQbhfzoY2N2nkBkk7Rf28VmR5M",
  "key10": "3qgsfRPC9HzP16odxgoZiaFVybpDdqqj6MkavcRd5x3e2AjHC4MvKmJ8woqhbfALP7mgFzCqokf7jGSHjLWHWVqr",
  "key11": "4T8i5gXprFw61FuHcRFDWdd9T5YvPN5cSQRsXh7cB5sWSdwfaVxRJ6okJGeJCuyzz8vdA84uSmUStnhTqJmrMuWU",
  "key12": "xhv7nFeuZwsTFewerzhVP9UWDxkEZmBjQFGVkcctgVysBS7rinZK8mzK8dN1DAw3vrjk7XUfvdDt218veeLNN91",
  "key13": "5uo3hH5r438i2x1ujDH6VBiF8P4F51y3PqsWuByC9vPm2KJvmyQYUbNbif8XgS8zH1n8w8jUvz2DQs4VQf7cCsT8",
  "key14": "AV2bz6Yg4Ty3umimuamxC6FAxLHbvAC8HseQevKdAoacAmaFBXhnKqNcsPBiZZU1WeLFC2YNGrjAZhuFdnrUm8M",
  "key15": "5bWNd9Grv3oenL8vMKRbhHW6wWeezm4LJPnjboKZWbmfQyS3kpwNqBxQgU4ttwzMLJNxiwJdXKiAn45z45iFQfkN",
  "key16": "3rR31rMatS81NULzqaBNyLe1Cf7mi7DCrZH35g5w79Ffpx7zgs8nePXmLV9eGFiqrgDjMu9x6fNBfkZs9CE2Rx4R",
  "key17": "3fu6rFGcedtA62tpQ5o99Mn3kxdw7VwL4B2YehADcJXSi2ypWsRus42NTBz8PFQfrg8CyjAnEvXeMvw3TRRpUGnX",
  "key18": "5yV2Kehen1y4JSFNEUPpTFayCS513Db6fV3upzurPd1BCW2fizrxS1jUaNZsFhYoATnTLt8NSijSM9ThssS9JMKo",
  "key19": "5NhZbrzz4aYZqp155NiicyPjeam9g8ULyVAMn8XJR5aGFctwfEA38AyiXyTq4FNGN65qjyUM1qSMKQSEDouZ2KyM",
  "key20": "42JgdzQYgnCvHaoQAHHtUEXoDgqdcFrjKrJpQHp9EbLrW41hrFx85C46RGrkQ8By5B1h4pTN6PWehju7sHN335Tq",
  "key21": "zicz2LDTj6GvCqxEcf3AsSwa2LtcSPArSYTs1qWXdNVMSUVekoNqXYhkBA8CVQpx33uVxb9wXohoSrf7ZJGfQvu",
  "key22": "3KmLnKxzVrJEF4NXnvsX8Mn4PL2sHh3VQC554ZPh1KKHjsH2iPxnZmYAvCni2LRZsU6j6oHoCVUMWivEv4XkprZm",
  "key23": "39WjVRvGj1Vjkkc3yToCMqyFjCroqQVCNHc4NJrkGvuYtgDWHidpd5jkD6xPrXHTTVtshaGJggimxwMQtn68EwcY",
  "key24": "wNy1ciuDyX1sPoevCYQZZizm15vkXXq49ZYSyJ23deJEAWxio6dvni11the4yQN8CY9pJkrF1CyHDxUQ2BMwTRR"
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
