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
    "4geBEghf63PAEss7BkchKByxf7iwCRqQ6ytpxBCFH1K8DMZaUvKSPUKv6evWxRMJSX6L27m4pE1VFivaWrEEZaGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jg4weYfMZZKupiCGhPV6XKGUCuqZEpum2FqYtLLQQCtXdcwjpP82SPLp3gSth5Ujbh8CXT9ZJjRj8CK9eeYXPHd",
  "key1": "5A2fUrQvkyee5qx7qDxvk4zCKzwe2XYgjDjPnRWqeVZi9QQzfhXhur69M3gTPTTciBKAf8XvCm4YeDtpxtFDxHuU",
  "key2": "2CG6FK2XEBApyyYexosT4jc2Gf3u1hv4ePyAncys9Y7Q2s9sMAQDC8uAkqhzHC5bYvVBLZCnHbMSyinuUitijqrd",
  "key3": "571K9yBJwfgheJfrdw2HPvCoAHMNbNdqAhiouhbqqi6qMpLvDrwBLp2EtHxY6Gor5NWR2cPwrtN4XMMuwcsUsb45",
  "key4": "rxxSFggLA1CTFfKhdgEeT8hU59YVRDU56NDfsioT2AgYyrfD3zV56Hq6EjaBjq76K8JtQVP2XSkUsHaLkTiFZRD",
  "key5": "3TYCevjTbryHcTRnHhBRyqvm9UFxo6pMcsZz2NaUvYmTvj3tiwhWQb9YHME1hBehk5pZTTdk34ACVVripL6pPXJJ",
  "key6": "4m5Z1B3rjWHVmQyh1yNVFQQfnKD4L4x12tiNfimLerBH5gCjE3XPz8H5EnktkgS2qfrLiJ7zbFsVo5dAhBjvwQ2a",
  "key7": "4M24AKxacgYE81aiLirESHjoTSYBnQSxvr6bdcoBjLPD8M8mYrMewrqxtnhLi9YckXcZyXga3Zn1MWrLhKuzC29a",
  "key8": "3pDMbBTSK9RSgYdom5ZEorHu1Efa1tQx5VV3vE5Vxog35EWtDTgVyLxUY4wLF2m6MEcyAhnZfdi9FCqxr4WKEV4w",
  "key9": "3QBKX1Qvu72QUi6bc9aoT6qqGChMHMf7Yo2zadoDbUEuxyMTXZQcEgdN88gaj8M5K57AjXsZBTAjKiGjYmNoa5nm",
  "key10": "2E352FxXQkbEXDtLF6iHhuaJ5HWWfnAbZu9TQ2qSz8zZGmK5ZKwbgcsBS3vtMAbsgxaSyhhWK6NjVD6k6aNnCnUo",
  "key11": "2Tg5jFjKWb4KxgXxY2HBNQhPutEraJpt9PW1kkduYFyYJJyWpfCepeMx1WmmW4wCr4ymTDRkt9ifJmZtmEEGW59N",
  "key12": "4Q8jh5Y3Jvg9VVD3F2VRi67j2eNAAp6SGevXF62BH6qwkAxjEfzB8zYrBu5qLebJYC5rcfMYrK5cEuxUTRwhSd5m",
  "key13": "3s8hyrvazjVYyjDsr1JprFd6ed2hSLU78ozYp9H11R6D9nXFN6VedKNzGKYZZ9eGqgJMEqxCwf7KHyvPPYM72uSh",
  "key14": "5zKjGVvRFaUWCXVUKsjSu8SMe3TXBnf8mWUCD2R2Vmw2Bu8RPJA8rqwJo8h59TLQj4k9qbP28QDvCWrsQouyLBMq",
  "key15": "4YDNX9AoaN1pkCqd8kE4qRGcg5Au94F96zE4C9MDxkNKEjWoUMk2jXjwUnHCEaJU5aaM6XB78N5hVXPriXcFtX6b",
  "key16": "489yrgzcrJj38Vr64jswPD3PZLeZoWNDmmBxtQfmMMT2s8x9g8SRTG9EVHca3iSU4gd4VGfjVhNtreE3YYZhJMZH",
  "key17": "5ofc88smJQm6NgxED8WKSejfeGcZJbgXt1SYxKUtYkWdTGTUjWoh8GjjYjXZ8KxaELGb3X4TN3cmSe7FW9VpMnpe",
  "key18": "4V4t73gwMHXsjYBSCDcBKmeQkmC5cj59EaoeMmWyxSwPCUh45zVEwA4kmpR4wWH9S6QBwyva2ShVMjzErvTknMK2",
  "key19": "4pKopgNauZU5d56Fv9aDvydPKQ6xefYkhHes6GwaNbFZKMqF4NjgNSD62rtF4gjJ7X7kUNJ1ohvqWQVEmGfRDFpv",
  "key20": "1oqmA3vHHsrjUfWQCmak5549DepBxdTk8oyfsKdYxyvYeKr76br9Xb4EJP7LPCDhPUBa83ESvds77h1kpMRvAyP",
  "key21": "3GBYeV2GhXm6Vm7h9CAdadyx9YFmyvLSMaA7nWdzqmSwdsX1JyBGx7G1wz4UCFKog4y3o5qARrCPDM3TYyuFTQWD",
  "key22": "48Wg75SvRZXkeAV2PkuueBkgiZ3QFnHd4hmgKYi2crBvf8APvhfcLbDN4mGbgycVfeuTMy4SJQ9q3sRCBoZ1B4ZC",
  "key23": "4AaoSJSeFyNBhCCbZti3gM5FWviSBxmXrhGcVx5vL5q9sv9KZefsQ8ntXq8BLfVVPsPZX6GgYUv1r2t1v6ZJ866U",
  "key24": "3HDGESJ1ee6KNeYqw4kjD9CMMDp7JzbGmewhwJ5KiTYzMnM9o3to4JULbzwdTk6nregzZqKtFHpvF8nzbC3Uz1gL",
  "key25": "357RjizKZ5tM2FA8JGcfTMUj7t8KPybJo9MA3unzZQmRzq9aEvbUfD3smvPPRV84FBn1HxDDqkNFckzsksKsDd74",
  "key26": "3VdMrEyN6AkyAUg242FNeWNsJhZLVrT21TBoouPk1GZZFNHfedyTi3R7pq6hREnGzwYGShBrFf5si1dHzG78dHNu",
  "key27": "3oXbn2WjE4JsgKLiDmD3Vk4AgrUbcitn6EApaq37mh9UFASR4np3p9eUUpoaa36oRHazFJ21WsyvG4vWELAomHGC",
  "key28": "5s7FS3XcjFnt95Dn46yZgBopFnstV1H2CfrUDh129HzVi99TGpVsyvMfJ78nBhQjm8VtnpB5RJ6iLVxhLbeAkcGg",
  "key29": "5pdg7meLjJadcyoPriufFxcYEz1KTFbV4wdLL5MCQmmR6VpYFbzbSAJPnr7Xe92e9C3VqZ1qs4FxraG3XGU56TyN",
  "key30": "d3iJiwH6CFoZ2xiYQWMfFrRAPpDTw4KhqSpwLYTqUef5VwZYRBzt9ikKET8mmFc5Ryx5pWAiz6HYKryyHL53uNK",
  "key31": "2AbZD3UPEQ221JoepPEwcd6kDcUnZSeFKGvcGjhm1KJDvxcs97Lth8eUD2UvTc969Fg1829s7HmS3PcaaD4RNqm"
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
