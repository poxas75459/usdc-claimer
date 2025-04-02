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
    "5u9HsJ8SZ5f2VGiZudHahTPVvgc9fu5Hr177dgUz9WL6hqQDimxiX5hDUKYvZwGrYYypbvLa4ikgY1NyTZ1r5QHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59EZG1YipxLvH3AfRdVvxWJs69JZqLbCNwxj34qa41RUa1LMG3fKLw6Q5Q8f3UvPYMCwMsWYXXpUTY6g65LZ7LoV",
  "key1": "5p9Zzv21YznsFyC11d2NMvmp4NrdtGpkWaUEaftAs7R5ma4vEa83FkxD9EMcG5C8zhBnrLF29Eiys1KahVgtmtC3",
  "key2": "2crmwks2c2xdNRnW4HHNnbK1H8VUkShojkEAbUa8pehYhXMcyNAX34oAS7NHAd8BrTN3yRZjgswHjB426U5AFyj5",
  "key3": "3FHct1fCC6xacvka9MNtzHUsMgmYjBtqRyGp4aTgCAsjy9VNaeaBcfRYLhE3xcbwArAVKd8CCxgWFDJTLJPQ3QPS",
  "key4": "5HJHBUjM9A2epBehKopFoHjqnhiPqvCfJCRYpoeVR9vYW1tKgznr6axk5Li83p9WPRaTfpdgZkH2ZUBu8a1isyhT",
  "key5": "2e8d9vfe6am9vht57krLAkRjnd7i3bqGAWHrq8qEP2UGBkXMcC4mgj8oLhX9ZjJeWcJGJMsDgLHLDVPrkQg9BpwM",
  "key6": "jj6WHKtowGLn3MhaSVyreFLmXE1f39NPUoR25hKoedZVnRpWtBTZ7nTGLEFVVpdkgSmhus3JWxRoBPbWue4bppV",
  "key7": "2koTLwMyqEhrb7od8FtGjnDHnxrgqag5zfMM6r4LEeHvybjscZ9b8KizH9QhHXfG62KnoJFJRopmzvgRK3QH2ZUv",
  "key8": "3WJnUaUL1LNiNAjFBBurwmMY3sJn4PRFim8rFq9q31DKUuUTCsLBXTQTZdEZrBgFEoALdcWSybFB3MAZBQg2cFge",
  "key9": "25Hsiuc6XxauvAGdSqtavMESfqM5CPzFDzrMeWPggFRkmN9ZPsu9y9ZX5DnPGJzkvXcu1xdzaXGEtbcUGeGChX4T",
  "key10": "3Pq5jzG5AzKGwj3bxdXwfqnMZsojdoX5RwYKUWJjtT65EG4nKEtRnKfXMiTXLf6peD5PGDsB1uwKxZuUAdRmc6sn",
  "key11": "4iLTHLAuvHwW2YWYnYnUBHNxy5qP1DbHz7buE5soKJHKzNWM3uHKEGyqgoic4DXVNUqoYnWvKirxJWpyrTedCDSr",
  "key12": "3Ba35QVsE7n7fDfZyZNgaMRZvmoPzmRBoqPr1qrU7owqxmZSiHtEU6qdWAKQoEoEj9GaT4GWf16LE1ZJC9wArzTj",
  "key13": "2Ly6xBc6BCKqdWypCpMH9UAwLdxK8JJ2Z5qACewvLkyK2xQUt7TSrLhVN1apUZW9aq87EGv3iVHhDsUU2Zi1qU22",
  "key14": "5jwkhWYz8xEr46gfru6ax5w1Bfu7VWQg3naji6fVTanoQx6satikvNuHuHvnvMhgqhZxRchRTLxj1BnMb2f4wuDA",
  "key15": "3unrhFpMssEJhY6Y2xzTfTQsjtr7axTsesG9CAgEaeGsE8oaPvRJMdTcvyCJmjQwjyJsR8cLNn14piPqBqcGF4Td",
  "key16": "3dVPqrwNMKHeiHDFAxhQ2K4WCTEACeJehfHgiyQemzFBk7AyZiZBRDi8aguK4rhJh5QCs361zsdxkDu7BhowkpXu",
  "key17": "4Zts8kf3Uxht2ScBx9Br4tbt86Up7n2BTYSPU4kJ2F4MStZcW5rKziDDYhcL2dEVfvQjA3EMRcP1TtjoC43WWajL",
  "key18": "bXEgakYEG9yPvZsKwGShiuWVyG3j4PcBVjRM5g1X5DJL6YgHfMd39h51BZZ5r7v6UAXTXDZq1gZ6KTaeL54rdko",
  "key19": "3bbB1BA5a8vuVQUF18MyZa2CPWs1g398mfdL8xNMKoqJkFChgigp2B5nPXi2LVk6BCwvS6TApXTx94QCtpRQzPWX",
  "key20": "2rwsHkmXeveUnXhq3VYMwA2F4wadt8vrSxVsYNh5Jy9pLVm9YynDKitQStgnbxWrXHtfBnDkHkLmshAA9949q85C",
  "key21": "2s4tEEh8HnRtHAKVHfEPb2ny1sPojTg3sgoQudzEDPh7wZMScMrhPFAUbLxHKxQSz2T7egwdXN7WZESSCBaPrGzq",
  "key22": "52yHYeL25dVxYpmcSim2cenXvNsD7xTLifHTu7qKXFiapJU1YgNnZWDsfvJQNj7uaNPVKBqW9HDj3qn2L2ENjD7c",
  "key23": "Ezt9ZJjByHg5qE8DHYBmGgVqB4EQPGa8nuiPmy7HeDBUoCijiJiY5uey7Zsr4pq7tSp2qGEsadKZYXvXaKgX1MP",
  "key24": "48y8tpaMxWaDVxrge1PzGwWtn4KGEyrAc2QUdc9rt4FUozdCGRaEkMW3XX5NtRNGDT2ptP85UinZayFJV7DLBXwP",
  "key25": "4tULN2eSgCHcQCxKBnT5XRtFbrFbc7UwUtvQ7kpwaFN5MqGqZ3FAMu3Cmw2JiwrVWTybRtZJWnzMzH58f6dJxh2r",
  "key26": "4XXR1Xx9Ef6N2LoMwyGrP6cCmxjXXzxqaqPTaH1AwDHJhLM1drjKfHkGr5bVtrSTkEBnDvM62siQbjjzoAnSYB1t",
  "key27": "2tmDEHspa8bWc4GU9EuEEmDWMqv9U1ezvv3xDn6fPUEzAthZPUr2C9KxCbaEmmFtAcLHrj9SZHk9MasYaUpjCbeU"
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
