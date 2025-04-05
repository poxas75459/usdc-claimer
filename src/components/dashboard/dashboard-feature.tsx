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
    "5hgqB6wKVgcN1EgUSCNEpGfnWLXFUZFgivSZQBwtVmaewwhxtcLHrz3JpPfMHnoezLyfcnkYSjicJdE19WGQR4Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBrzyVbexU5Qn5hENYgNaqtiSA3GhqqVUNN3CVwCbzEfNuERRGr7i8nebHsi3XnsdRHFXcJbe7Tvfi1vthMA7LX",
  "key1": "4jeEpQjJuQnTDWaRvjeYxkdZxnJqzoGCXFxXTPFrEU6avqQD5iiZhNe2pugS8A3Ue8NQi1NyUNaqA7dDEQfBy7gm",
  "key2": "4dZXszWLSTdp3Qqsyr653yx9Umj2jEmMCiLMJQVLbU8Xzaj6drXKQV9JVNV32B4nNwHGqJVYyfbB97Y35KketrjS",
  "key3": "4Kv9YUZFnf2xWozNssCuodCNZMapyXm3Jswm3WCduX1656etPbtYGWpdpVDg8yTxM5Lz1G33kwcwKGnRfhmQ2b87",
  "key4": "26BdsxuhB5mgjpWLh3PJkdHSUf2JteYQDqvNNwMkaMvgm7tp938J7zz2N6oHF6cP1R373MGn2MdaXrfw5kSEMG5C",
  "key5": "2Vxz2nz87ELeQgsFCGo9LPAHgqTvuowE8nRJFWpz8PCZRf1Ho3qAi6X6dizvm6v7W68XvMKAzCAtaGGgejEMzmbu",
  "key6": "2NpoNaBysnyvZ7pVAyCDYi7PvUFH6STNLvN3FsUR5hQoAtgGgzk8oDoCugNFV9hk6T8aDLSuumYmCX8iAQ5gCivf",
  "key7": "3orFxmz7AxBJrGZKcn6voNcBe9U7QQpB52dQ7r6V6Tyt3S2ktdeL1NQknvZfT3nM1EucguAQAzqaposSPjpKyhjA",
  "key8": "5J2BxGXBVUtvJqHBENVcg9s2e1BBePy7cLhAt9rBBsr5FtSfxkiDhMZDzexUXvFFh68D5uUeTpnrPt3tvyp6T8R4",
  "key9": "2byVkr5XKYRiFS5N92u6ix8wu68xQywLLmTRpiSg92PUQ4NWBWLC3aJNM44MH28fP89Vdq2Y6y9VDDTBthuoSxxY",
  "key10": "2AAoo82MdzxzpmEf94B7vw8d6NhmN7ayg855YStaNEMAttUubTqfd6HMpv8QiiM7KmctYEarEfSLorEev3bvLxNL",
  "key11": "55YDY6Msw4R5Bi5Qnfjn9TYS5ZBqcVtiBujzWAQkpsBieScQqywo8dPH2v5SyfdkGHtU3mQPDSp9mQXCEv9reheb",
  "key12": "2FcaTnQnwD6VUMJKXeUWJ41uDC2gRe8YLS5zzcZ6iuJgJAKNr9LmMPSdnxzPER9VBFEgQbM46uxS2erSTPmy3qeL",
  "key13": "5sumtCmGvmPvhQvxbNJLidRSnNakZnw9jv6uCVpUD2nGDdbCbrVyjhCMcBoB818xLcMAGU7oDDEbA96yBRnNP1ao",
  "key14": "3bH8rJAdEBofqokDPBDJZM3pK6GM6PW4fTrPjLghThSuheGNUcvaWZV1wuA8oN93W3YNaEC8aGedBX2eRELLm9Wb",
  "key15": "5jd6ZvPxoLZCDknxJxfoMtXbmfjREfPuGScacfzno4JubJU8qEXpA8wmXcaezVJi9MLrHEsQsVJtSYXCQJTBH6v3",
  "key16": "4gSMnPADrFzZBhU8kj2F5dEVSkoZQyXrq4j8U6QihtaWSa2GiAGiAkFzuxywB73sQPfQEUs4BSEbuEdsfoZnVSzr",
  "key17": "25jHFHdZEwFjovazdRJQWUQYWUDvKcz2qUaGZbB4SX4oUfiASf3yZL7kNWvTTgc75sJbNuLmeVSzydrYMqqEJYWL",
  "key18": "3cgz6FamqYdwXLvHzcrqfkuPhdv43HoYEchdTAnsa2p9o47ZRyb9PeZB9cJvUWFMnkFGUYGTUV5rbAqiT7Bf7t6V",
  "key19": "5WQbW5mNyLT394JJ5EvAkfBFpcU1JMZxEJ7CNxpNnQ49duHFikuCNRcLyeb9b5k2ZjiQGQFEqLkiitKDzA8y8o31",
  "key20": "4nXg11rEkwiZoFdK145ZWYbZEkddUguamZsUwskVnwFa5uNAwEs4UyNZJRsAvDk2hiDWuaB95DqJhiG6pKmpCuED",
  "key21": "2xGi3rbKAcUZQVTLHcFvDrBvzhihCLFD1NZNorbdHwQCfr8MrUKkTfngN1JZjp3yMRDL8PrNB5SNjtXeHD1FJSdQ",
  "key22": "5YK26uFysTTeWUJdsNLDwHTwpfaMMod25yJckwSYxAAuLQSzbqtzHDsKVKNkohNjbEBr253LBZQ9JA64ci34PfU4",
  "key23": "5kzuawMxPCchkV9v4grDymifnNGrNqnGMG5ZUfEzQvQEGwYWcarFUdsGxzhZaK7P3C8oFcK4V6qf7N8vYA4jiKzz",
  "key24": "5s1VKyoqfzRB6wJiyRQXyKz7bKjbEwbL53qRz4FCnrfhgszcCPo8mBpgB9YS2sKKWDyNdH3nhcSDi2ZbAWXdnzFc"
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
