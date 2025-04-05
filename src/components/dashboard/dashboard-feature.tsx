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
    "aNwT6PQWz1CUwyknqfnnKZRFQVVXs3vWfNi9Ta2eKBzAaGb8bcXZqUEzrBUBo9EDuEyAaEJwi9nFRJFq4RXBCfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fns3WYsxG4QmKynMcKEQgteExTEmw2ZfRWeUMsnbc8AtW65DzrLApokQNt7t1wV6YqzBzQdzkc3SWsgYfVzjxn",
  "key1": "5jWrjnvUdpx3wugZZhg5PX83AP2EbEYFJUXCoh9fGXfzMjhP9pC4sT98bAyMUn6GUM2h3M7w2pbMNeKDXb7q4M3o",
  "key2": "3Eaw3d5VBxMkwS4o7RE15pDGoozgaCxNMGKK2FXLpayFuD7yGtDKQ4mVkJ8CXXrrPiT77nrUkU1DskzhpWpXm37n",
  "key3": "34XcejN3r57PQUZJKrW1Mn4bLRywSMpfCuEicsYvpmaXsssrBNic42KcWHrWsNmmotJXPxeAABaaWjTsrrYZX7EQ",
  "key4": "5HzHQELJx3iQAr7qFnMu5YsPFc6WFefaNjcgCn7by7UjXxhXezpiMEUM8BUzyh12DMwv4wrhnevZn8zKJxwUdC2P",
  "key5": "o76xS4G8KZHp8gjyu8GwrHFqoDR6urGqs9PQs77MhRdfFK5CCuHK1GqDnN7Q4QJ7MKsor3AgGsFxbkjkztFkmDh",
  "key6": "2wVfNyy3VMU7j3sd37oz83KykicWXBh67f6NRzbxTZsa2DDUP54XJj6kSGGzxAC7cZzK1XdHzjFNwwkADZssvzi6",
  "key7": "4VzkQFDcBJzK2GRUyxoUzCQdYGgryHjYSSrKoNtKUCXunCYHEQfg84hqqhWi8Dn6VtV3rzKALEVZNWFjvBhRGZV6",
  "key8": "4yJaBAqLVXJ7Tk7B9YFLEhnZ5TmeDKKLC6y2Z37ix1EAS6HSRan1msiZ6MgzuxtBaZ2rZZgPEG4xrjocnR1HBfNM",
  "key9": "63321QcAQfXP4RddfX8N7QrnCw16vqnBe38TafG2anvbaVFiZJHAXuz8RKUoZpDuKNXBMSAdiekPHJ2eVg4i1DwX",
  "key10": "368Fk7kZYT59RbQ8X522TAetGkNW253YBCdAmU8fWQtjb8nUUsFFKAZtYbrQKwjHK8wLiAoCWhcSgQjsqJ6CJBsB",
  "key11": "5EbQvrRniPZD6ttE5eTw1duVzRE8reuiDujwgkaT73FvE7NeuXuUXFESWq3KhJvpPyPXwKLijsg6qF9HhH7BKi4B",
  "key12": "2YoM3Fh4kv7EvXPjMHV6RsezezByXhUKcfWbxoPnQWiWgmovzRwYhav4a3fqPYtad2Y8oGiSifRDF9a7qLLk1YxK",
  "key13": "5SgNAWwUMAdv7SSymci61oAYwchxukigXqJuoeed72uCc1J5U94ZCSoWU9qNLYobSrsEhXy4bqbAvfnNCp3Z8MDi",
  "key14": "3S8dsv4vrrteh8Fmm2rUxYtbC4b4pRQVDJnP9zjXt7sVK6Q7xucpEVRtAPjjKQAJUojWsg1y7Yhju2Parw4qo4wn",
  "key15": "2htt19TPcSJzSnQxiS6swsTRiD834eBRxeoC1aWi3VrgCEaeuwC7Apf5jDuztDgco2Az9fWFbQGbf9LZgPeZvJDF",
  "key16": "64H4GYbaHC595GB2KecKc9wLXuybgqMzAUobftSkwZcv2BQ9BdxCur27ouqeHfqECbbeNuWftGEBssLiFQyLxMz5",
  "key17": "2zzYDB29AfAaLWaJ3H5cBzPtFhkeg1zcPdhMnoTvvRZi8gQfX2PrA1TYjK8KRL5iE7suRPL9kdrAb7QwcHZApw41",
  "key18": "4MPbaj5BBHvuGrUqJYkTujU38hppGMkJymkE2ffabZhCPTdmXpFDtJQfPQVC2zAbpqmdpKVtsyf2MWe8xpLdPtYN",
  "key19": "4PrVEYMY7EsdzYXJ1Z3khmLCszz4DAHhMqQiAnqpZHafTVyP5tmi9cMAGtJvJvdDGyU6zr86mwKTZXwPQDdWwFPc",
  "key20": "3i6VFQz6ws5b6VFPo4ssZJV3xNEShN2zpZhgfkVMDUK3ujk7FDXN2bzNmTioeBdPnfrDseSt8hZFJBQ1KTCBtty9",
  "key21": "4ZszBwhB2FZ1SJbyv4Tbjo3EEWj2qGFovJevHZZMZVozvTJ2eyTDf8Vz9YeB1QEX28KHJ6btKcH7tmJaejd4atyy",
  "key22": "1mV9TNEAaEQwYxS9xQef8is3q1Wyiy59EAX4wxCXe5ZvQ4TLYfWakmVJ2Zn2fceThQL8jsdvLeKRqVPsJbbMFFR",
  "key23": "4uY43dGqdtY9CXHyoQgH4ymrZCsExZJPdkCAckqXapyUira7Fi7rXiKEuXA3zg2YAt3zD5gdgtpRZayo2Q6PCogX",
  "key24": "46hb32vHShv4RBFPFNnU7Z7TRbenKM1Cuu9No36iqBJFscJKEfBH9TFL9yvVRXC47HGnLzcCzRXsKbU6bZF8eRgg",
  "key25": "5x4PBXitYgVVnDv26W5TDNWYoEkhhu4YJXpFs2rUZrqCxncfDpS3rxsXnRXcD7ktA3Dhgc4raGdgFMyhpmhCTHxp",
  "key26": "4btRyXcekNycoLkdYxFC8h9UgCtTNzMPF97JCDBJkgrYcC4zNVisu9qvSq98gM14bd91nmVicJU7HmGaTW3BMzPK",
  "key27": "2zH5dXB8c5ZLKAEcerhDDWVWgXNeXTZZVMmW76p5qSa5yKTbNt2RdYNybbfdZBa1DMzYJr9te5SDQv22z3SurJgS",
  "key28": "aCrEiqwBmBDGvCtCi86zgvXFDYae6c7RWihvXzbtaQpud3kdHuchAtskEerTAvBLyzkkKU9svDL522SULnRcmFJ",
  "key29": "kgpGA6LiRpYpJPt8vzVnRcBip1SVAv9NuShA9ht7K4sSXy6PzScXzbmcR7x8FhCnCw4ixHxgsSxqU3BG4d517JE",
  "key30": "4hkg9xAiv4N31a2JhfVWNREnvteQa6gjzyWj8SFWfd33vtttZELfW2z7R2Z2dKTHUnDExWJNcGRxp7QoAbA5wrGT",
  "key31": "22cZ2SqicFSjXyiXaTRKi7EESH5RLh8DqheH2BxzyK8NkFjSBxJxTu4DXMD4vFCwpnfxu75yTctFLj672b3Gavxb",
  "key32": "TiBYM4G6FiYHVHTLN1Ln1Rqq5LnWr4wN4ntNeCeQTsKao4346QVeV4r6kgMZZEr2P2dN6dR8gyu394rxmGTwBRM",
  "key33": "uRiqJEyS39m7EWKUmTKrGdj9vxnx9Rwsw8CkbEnv746bszk3GUqALKjgvKQwcS4HVZdx6BzNoGJbYoAezka2MUG",
  "key34": "3P44b22BW286eXyvGfNTdfM3NKESbzT9z2WJDp9fyYDHKz5jJnsULDgtY8FuyobxfsTCvQ5tKQbTMyCEBQdopxyi",
  "key35": "429wU2DcEoVM7dKKn562XdEqYGj9ZjwJghuWFChCTiTck823ouXmupBoKy2B7CKciF7Tqx1rCs9KmCZK5YpkkDrC",
  "key36": "5jxxbZWn2K2TCBAt1RwkZsydFLjn28E4PSEhezxXU9jddQqC4wURewaZXQegFyBGG8xmyfwhYGSQshWUsEQ2kAiZ",
  "key37": "4pAoZkwo6bLhAZEMkBsTRxFYAr4fTergryz9yyozuGawdDMtV5g5HHm52Cb4GMRbTSbq2WWPujtdjrstxbEJus7M",
  "key38": "4aYcinj2yHVzwyQdGZRydd7ujU9TkJDDVHMDfKMeSNfGsp4r2jaxUeRYiFwjPHgRNR1LfhD8zbwgN2LsS5SZArPJ",
  "key39": "4BCXWs3v9cgy6wWjNUAHeazQDq2LEoXsTC9MEP35e2HWop7y4rr6HE59VUvnx7WW1uhKCXmHMs6eYG3JmHx6mFZ5",
  "key40": "4DxEBRHftQRtky8v8qpgsV52pWzyNxc9R5NHR6CXNZ2Sd8Zfy9LjL8vwjUJkXg8oEx4Dd8m3W6NmBpL2NpNVfvit"
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
