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
    "3QdqJ7uYy4uJQbZb7fb3wAtEmK9DXkPBAb3eagCctc2KH2QmKPYd9CmhcqwMxX1m3naTHpdvLuNFxfdLpg47fwLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24cnRar8FQ4tV5kkZCTTeByBkHYadnoRNp4EXR43yR7g1dVX73vBZe3rXyG1QvYKzzFfFB5H3tM16NSCy4eHT1zo",
  "key1": "2EWksEtvcXTvo53i15aidKZQ8E3X9DL2m9uHQyFtuj4ynFWBL9JxjztRCKQktWS56weJZ9JZn5grdhsiGKW6ZUDV",
  "key2": "5PRvMYsThv2EXT62JJVGxCL3rsi2RmUzJCbSEhCWLsEfJvGwzda3U33V9AcmBSqy75ZFzSoXzTusaNWotY3trrau",
  "key3": "3CugVqxDwxs8FmKtzvCpVdb8Dx5g1f3j99BEibQ9vWuqNPqbCELzYZde6dANEkEZ1F3vE4ug2uaNAwZRL2kcgidU",
  "key4": "56mxm43tBsJLr4WKMxyp9AW8XP11w1SdH151HjfZMB4ZvCSpSRmMhfE2KTLST7uk2rZDJccqujeGfac3jftzoxc4",
  "key5": "5MezVrG5yFeiTpgZ12ZNUf5odVRtUx4ukmSXi5Xb5GkKafGCeXcMbcSteQs3xKU5zkSHzx9e9kfn5CvhH2Tfo8h8",
  "key6": "5TNVykqumB1GJXJogL4qiH7bjr6Zh8jTSemqm1kyGwH3DM5tVDzQtXg1RM7VfTRHBkcnFUhgU1vA4UKSTXwh5GH",
  "key7": "4uSZbs951Nh4WpoRQtPSeqeqSCCdKSWk6Jhu1KnNw4TmRyetWg1b93RQaiJfsigAnXXe8nhYseWotrKTWZ9j3vHp",
  "key8": "rxdqiC7s5SEcrTbJtNdfqViL1XaW7tDxjPVaFFRn8h4yFxuemzg1BbMsbG7dBt9d9W1PKdJvQP1fcUvLyfK9ZFp",
  "key9": "2fCGk6fFRz3sE5J4tJVC4eGoJBrRZQiG1w7Yx8YYxEbpK9bqLdTtNUj61zEzm4ZthSCNsg9ufd44UNPPf64fQjcN",
  "key10": "53xfizE64VbiwcRg3wKT7vP4NgUVwC2rCf7xdcFFdmWEqmrxnjmSEYgXaBpXJvKG3UTyNZp7szTnDQpzfpd7TQ8J",
  "key11": "2jj1aGvrHsUBYd82bhJnmuUGN6E4cy5a59xs8TMU1GHX2Ps8mcPXXDZsm7VbM9V9pzV27DmFzysyEpxNKbQcconn",
  "key12": "3p5o2Q6DgT4GcLuDhnbXic2hgzSsp29AhswVKEG57KTDT5Ptx7C6C7X4sgDYiP1NhhdDfGwAbPhqM3nuhapjvav9",
  "key13": "3b3YWvvxkejR4N8aAz2NVdsroaYEaCXM6wCTm87oNGnR2sdc45AdQegEDrtiYZkXHKGstvtjRRPd49rezSaQknx6",
  "key14": "2xnFTszN7DjxsXGAbMfTkvBWyS4qnirRChzb5BVKc32mSi7Tc2hw1WtRkTrigW17YDiZmJJw9scuFtRuLzMKcd2y",
  "key15": "2u3u2JmXJxrN2dpjzjRUXMXhBPdTmMtkbMQPQTHKJLwCXKPaXwyxeV1ELryXMY9ujqYEvfjVRWg6aBoAJkXbChQK",
  "key16": "TUu3Dgi74NJUHJZAzLrbkgNfR88Jr8ik98PWwYnqabofoDnXQaSbTfTarmbWGVds7fFNqwPubptXSNgZrCZxCPr",
  "key17": "5BpArs4aAGTwtooBvHvuiYuUakdUtaED8KKXwGSpokRosDiRzsvBtGvk3FBcFnyxcNP1ZpLDPZF5Kfcw5f1MMzEC",
  "key18": "4PKdBcJQDeGiJfpW7xwAHgggPnKPukNXthrK7hUkxbyDo19BL2qcRCwDJQsS6R4zp8uFSAgLfn5TP96qfAfMuXEB",
  "key19": "4SbLZxcafUEADdpTT9sV3Gt5vDoYs2kNCmZsU7dANZ99MZuBWtAuNvXxTH8cCDBroozYxLiYkC1qjRoicceGNeZ2",
  "key20": "5vatT1JCpQuar4u6c9K2Z8DGiHqrJkBk25CmEFvNfXdsEHCipK7pWSfxYxZr1RX7c9qjoe8GRi1QFGW9H8J8Csyp",
  "key21": "QYXJ1UvyqCBeEF3vC85MXsFwEKVnpQP8MhGiMFvQKYQzbgNgnGf5bwUH8oHAqPJonaTRRJKfE3sgXcUArWfzcrS",
  "key22": "SW6Qy9FqcWjyFuwXj7R9AvsSJmpiWAcQJC4K4QZZWS3yUB6nSdQUXhqDv31cP9AQ6KDm2qhNX7mtt8rfGoBWdeA",
  "key23": "2XnqU2YcKjJ1xDi2QoTtf86sBrT1mtboT55tXWSK3h7GE9muwddaCHqqHBwJQUG6VnX5STkFM7YVXUq6w9b3XL2i",
  "key24": "2fTT5dpQ25NWrN464RLotgoNrJ4ug2h3XiEHLEUv2zx76j43ob14FnqnY1n3XMhxqgrSY6BVwxVaysuZdGrqBMjY"
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
