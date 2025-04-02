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
    "3D3oP4PBpXzYaXKbjtMh4U2bkz34z2LQnrc38crzZ1m53SGXT7oYN8jXwav6UffMHpwiBUhAregrUbmUJpk4sB3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbETPjsvGBgACMnvPF2dSfNhsvqAJdwkQbfmjki35J5zWu3E6SjjzrjZvB8xPTK4CJZum8t1ym5U14Vr6g289AG",
  "key1": "4wkxHFUuCRJwHYn84iDi6Z18s2o5SU9afbomhjVkVmDzPJNhjT3vPqQnM8gcJBJZSza3acZwH1uAwh5mwapKVJLY",
  "key2": "3q8Ubq7443wt5D7f5DdxQMTJfAmCNENbj58Ah83A5y6T4WNDGNotfGfFq9koCTUjiFdRsGByqerwZ3VKa4jWTwnm",
  "key3": "Qb3Vr3db9zZkohNXnUSpU1ggTgNFNnhCdwhGuxvxHvvymeeu9RtXFSitMjHtmxhqukne3KmeVzrEaxvp6tHAkDW",
  "key4": "3gTtjj6TQQTVD1U7gDMaPXEzAAP7K7JBix9UtjkWNxxtRfa1pJDLXeLycbvm3e6WTa1aqWn5EiWMUkmkb8et7NMS",
  "key5": "4zb6xuhHynPtt1SocHe7u7KGnttRoku1XsCLNDh2eNkT9uu5HJCtoHQqNc12kdpBqfQN15NhJq7iox4PXcof8Dzq",
  "key6": "5NHqCfUHC9N87Sf5c4uxd8mL78HP8irkvNe2gT7DQmuwTMmGCV3dLa4CDexpbSHwU3n5arvuc3ML1rJacg4k3N8i",
  "key7": "489whaQUA8ohsJ26srnTNfP8sZAvjrPPeCjdbwhe8RTFktPimNKpM6eH4TMvBkC1sSLgZGibUoHese1SPMoq73Nt",
  "key8": "26N6zqEQ1XCmwt3p123fVKStQE1qTYctYacsq8YaYHfNCLhiCztBvErQ8ihenecpLsfjNccnhPY8ckFjLf1tqy3U",
  "key9": "SSd2v4zgwovdhjnqR2S6EnqpG9vtssG1kjeEFvdrAfjnmWvTFYS3gNjTqQNZjomKds12yep2pJ9rQukTe4mFa2A",
  "key10": "5UvpPBJg5AuT5SytPJqSrm2Dw12aqDmmJuDsvnaqiRWRxkzJ1d7WDT18N7GWD8EJUfN4vFSmmQ3GNSZzwiR3k4qT",
  "key11": "2EtFuCu24AaDHTr2QqsWP9kQGGf6Cxh9ToeFHWSaxs5Jd56X6kexMFPBRnTRz14ZeV1kaPUEBuVJ8EA1PQDehP4s",
  "key12": "3xAXVnZ2jabaxHaDZot7wFqBBiwmc1NsoiDeRg18BchLc2hENZQApNMjocwN8wbF91RTQc9HmsL7WFSbz2BTKa7x",
  "key13": "2NV4KzhxWeCjXzAJqn2TyxC9JLfYjsTNHbJfpKpFqpN9dAQCDexEr7rLMHS1RvGzrMd2qrKNNHmVVHdP4x2m9fhU",
  "key14": "3QcDrUYVdzxPMCRR8cYGRrxibGiRP8pc4nYmCac9fteEW28G5uC1e4B3P7TYM611ofnNW9oxssYrtyrXZqKcUwL8",
  "key15": "4hBCHcYvV4YvEoS6Rh1GzxBPeXRNthw5FFmJo8ensh2h5noNwc5nNNd1F9c1MxLb9EEUxjxTDdd9CzdK5TKHGEmu",
  "key16": "aqj5tybaiT8eptxM9S1hv5SBZVQs1F8RpW9n35SqicbBzeKEei4NV87occRpgvH545QHKUhMn9GuuWreNeRho8s",
  "key17": "eLErYFVZJA4HREc4mPc4S67NZXws2mDuck4oKuhR9e9K7YuAsG6sud67gV1zwYysX6CyD1qb3G8VUc8gbGkt59D",
  "key18": "3Fw2GbLT4QY2XJ2vGtt6e24skadp5qJ1hsiwarqD8JUrDqJPSWA2KteypwjcHQVXyA2JTBfSwYXShGQZSQGk55DA",
  "key19": "5GB7waGXSrAwpQvXp3nGoDBQU1uuS91cWFXivzXki5XWYaXj5MznoZQe2ygYPawE99K539JwowjLVGcUEmdhates",
  "key20": "5NKNKBecfzeWqSWKw7yMsbJRqn8Ps4EcNwCVbVnZ1hBA11jpfziFp45J5R84148G6toe1b7fww779zuiXhSgZTcS",
  "key21": "YCLSCwcKRP832YMwATTRprXnS28rbvRu6tkboAkE3JdCkdiUQYvc2SrHUgsBXJW98nokfiRKKC6WjPFsmyfuBdE",
  "key22": "3hXbvbVXVWaDhvUvvtbmjurhR8F8uDCtdawSFx3AsnV7ceqRcnRjdzvqJpH294hB4ejo9xJTaHHN2U4D43NR8hpo",
  "key23": "37nCFd4JaSAQs9bvUAfCK8sw3eoxVf3mrihhUGyN9Bsndr6YEjTRFDEuX9gRqPPhpdZnyEe1Cof7xQ96YXAJKheZ",
  "key24": "5gsDV2H3JJPc1b4ZEjEu31Z1sWVHsUB1B22Cdvdw2jw7pykEXhqz9fBZDGG4dr6QuCztxeG33XBFu22EJir9t7bC",
  "key25": "e524RzKDpLWeFscF4cf98sm2Lbwm7mftHRs96zdNqXEvN3wxyEU37w6aWSWYKniPZsNqMRoomhDupVKLRWCWNF5"
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
