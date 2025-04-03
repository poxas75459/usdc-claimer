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
    "3HhCXX6STqNTRJPFsbXao8yJRcjLP8m49aZ94CBw2PwUd7s4PPW7FGhfJ2PGY1sDgv1ACGXwFB4NC4AvjQuzNhXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4FUkGrk8pTqrxmyY8tgUoravB1NZ6MuYhQZqibaSTBYM8yYpQ8AXFwd9TYwecvZmZcwDGR1vgjuHtTW3vwpRw8",
  "key1": "2DrVM6ziCN8kga3qwbD2cvneWzEs64tkKGHbSmzgKrfamLkJ3F9E6EBoXErsmPByxANDwC17tP4m2nEjHj7mWnzz",
  "key2": "4NF2V49qC6A87rDzW9K45sFY6bwYNJvcsXCSZoFvdVWv2MmAzEKdutL2e8EhvRATDKhnErwsJ5DSMaVWz7gefxbt",
  "key3": "3syToVdasWXbXcNuSCWm5VHoDkwcT2emw3qybQEFqiVpfZ71UGtipMjoy6CbiWZvhEo5c1NygZtLDcY2DcrfhYzE",
  "key4": "UEw6xbEY9Jei3nVdxieWyZvwkVjkFGAhHHqksyiptiM4vZgPgzML4XxpeFcAGQc1FuXbRP8yk9MGrta3Esf6MYk",
  "key5": "4mm1NnyW472PT79F6hVFjuoh3Efmr7kkXXRsrbtoTH6ABHMSxRogc9oSuqrBCiuW89jnVTVRwykj6JoYBkvxz1uo",
  "key6": "4qj2HySReDapQgKu43VVXtptpnCodse3xE6Lz9j8PsXM5ErsidUTPoz8dwTcFkZiXVZ1udAjLPWHHy2METP37khX",
  "key7": "AF8MRdhLvwuLYhavz2sgCgMysh2UGrEwBqcogjvNsHwXymMW836wvkkHy8BTmZBy3HztPd9xopVbi52wmiRMH7Z",
  "key8": "3itpiviLdTkLUBttnB3RujWtCRLpgeoX1Ly6D5wMFti4RNF8sXsGeu3ZwGwfoHUqbz2rS9dRsJjTdXkiGmNd8HuH",
  "key9": "4aDPz5u8hmXv1qBVmPsT2GLpowB9Tu8bMVWbWLsDHcU6SW91X2zfUfEL1ToUaYCs7kKkjxZXaefDrXNnL5BXStVS",
  "key10": "4oWnSmGjCCnxJ99vZdv3UnDN9nsQh8KcdPPg8zkt14MbTQCE5pS2CsqkagMLaqC9assYDfMfx5BKKbv8A4Cy1vQE",
  "key11": "2cqAotv23FrHshuKUcPKd4qYvPipQAE4nWQ5bMJ3Xf3rnJC4E7vzTQvjyngksB85ySk1N1zU9V6EcmxoG9tTXjkx",
  "key12": "5jWr4mX4vRTRfcfyMtKwyGvH3fF76P8Ef4CWAMFGCc3QSCnC9cfzeSTkSw1dusAiCGsJWqm7jzUAYgZdikyn5H6g",
  "key13": "2CEuzt1jqJJ5NT2hMNT93QzsLkoUMQEo6VCnYH6rAWZ7Fc3TTLBw67RHpwPQ1LH1t51RKZE4seYANKaSF5Wzrdzo",
  "key14": "2S8rg5GEu63qnAcNXrgWvCDok4hdzNo8Xb2J8c2eujmmLJv6oPUHnLmzLCTpz47LnfFyhMtrykPS6w2Z3yjz1YDp",
  "key15": "65b1u7t4MxxKEmieLqa7bXxYjmujk4U1ySfg32PmDFTMHswqJT8udraoeHHeqzkSRnTwLfGLDpNEES8v9rh1BKQA",
  "key16": "525ParctHWZrrYZXUSZgKMxLcFgvwg9ziu5djEeBhx4D3JxZjizKEtQWfd6bE9myMXw1fvkouKeWL9E9zUF9GsEj",
  "key17": "8qB4oUnBhREXrPPBWRR65EuVxrp7VCRKj44zsyGbrS7hCePq2z1wPhcjmXF4UsDDZEQhw7PuzdTQt5zjwNpkzAm",
  "key18": "2sjgwViwfEG9nxTXNZEVWD9nnjTVEHzZtoWaqzB6KhJHXjjxoLfA5WTJRZcDHittcg5RxLuQUxUvw63W7nMSSqnm",
  "key19": "YnybD3wen61uf13jNFGyfGUTsLTrNs68H5SSYXeQ4Qaxj5SpjskLir5cLANfUkmsoHKNQkbvLqzyosBdkQNzX97",
  "key20": "3FQKthvdZHW2jg2R2rxxHfRrv3JgAm1eJxaaaX27AxEWoUsowkQanZGyuCgjxriB5M1igsJkRzk8ZyBCyEa2K1jy",
  "key21": "2tBHV8rgnJoVRiApFKJCN19ME2LVr4oimf2LaW7E7xjNj1Nk9FwZhdXsQUCBza7Dpr35SLdkTNN16S7HTmQc46iG",
  "key22": "318SDWPXj9kcdErq5NAsogkqcTCam6TcuZZZdR8tYSA1FtbkJUfAhU4Bg8dxZSpxNPyjv6qHZWouaoJSZFCkH1U5",
  "key23": "4KWA2d8vP97KgD4fNBcvU3ujWHtFzoUrxu4wue2T7dMtdobPRs5ytNmHiV1iEbRqH4F8bbcAVMMHSmASa3DEiXAc",
  "key24": "5o2MjoKHW1gt6D7B3pLJS1zgH7vP59D64WuPaNMchBEkYkqyte1zrxgPg4EMcjmMefRZY15ZCz1dQgYQS6PU9897",
  "key25": "5GFGNKro5V28TwTYX7GxzHL1ycLLNNfemYqyFoDRfE1Ffs39GVrwUrrsTzXeaXabeVQayc6aifBy76rMkTEGP9Fn",
  "key26": "51RGF1YbsfT1gDnNV21youbpAPxggNmMky77a2H1dfqxUJ6gF9gmThZ3WSkuVu3N4CFiEfxqN2Hi9MXxZmrpmBoz",
  "key27": "3Ur3hSbK6ZJ34ojT1ZNo3ZAR4ctyR7e9EBw91qrnetZXDV4v3mSBseNRVpq17TFeb7WRWgK45EQarnvvao3qziiE",
  "key28": "27c4qud7rAoJiamAYqqcu6sVYTscSWN8L5tMje6rapirNpMuTMmbrMpEWMKcyGSndqnx7ax9z6KBWqC6tz3mG1LM",
  "key29": "4HimcotXvLrMZTvsfMfBx13vExAz8Vw6P16q6U8XxZ98shJ77ZomGZUnqrninK6bV9tXDU1H6RrBUUh8MtQfhnfm",
  "key30": "4CUP4GEjtbbKQzMvbmZ8ZG5xXD7eESgJ4gXF5CQWTFDV8k7XTQUMthLXbXmFUVNpDqFXZ1m9vbrFYKMX4RPKf3CW",
  "key31": "2ioyaEDmr11VBC1PRBPJMdzpfbAqE6CTBWeSi9xw1HbqbcSGubbGCrcDCrRxQuKqzcWvzdgNF6vJybQTTg8tRQQo",
  "key32": "2XweoaLA7rLsCXQJUYrAB7yRvk55bmTgHQojrtwH2rsxxogZjP4HbLfySVbXgiWXvoeHAvjBjW4nNAQ1Di4Td2Z9",
  "key33": "2aESHZqirW9DUNG9Z9aLHCDhJUdy7g9KRWygzN1p7pasqYoNfsNJZ2xPydckMrxf7S7fgsjKEEFdQKeifC42xBaD",
  "key34": "3s2tUYRn2RUWhH8BdJgFaedaXVAxDdkFYgFcqExBbQ5Vpru9htihNGHTqZGEr8GrB3KPS39qm3BBvggwqaoDdvp3"
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
