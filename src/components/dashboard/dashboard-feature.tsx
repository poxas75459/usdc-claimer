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
    "3gCDWAViWgPFsu4AncYcAKmkGdXDVXRzNPNBAPcFdEjmpFNB9abkSAzwmq97nGXz91iQdMJ7amt4pAuV1wNXBURo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VX5rADd5ZPsYzNcK1e2srm5n8SMDLJLVwVpkW4vkEzSxUtd1jwdg3HNDPhmzjhiJjkyrkt1fmCHo83GA8dpNGB",
  "key1": "5xgzc2mhVp5mdBgqJeL6ZTyL1jfs8Kj6vidFVpi9Q97Vd9AXuLAkH3KBRqLiDPvMQzaXF6m2rQombnQ1ioNXbGEi",
  "key2": "2NR3cmNG2V3wciZNESp97x9uHsKEuuMDxTcPznWWvwJT53bmqTNvCTd88d5S3bjoivQBAxjpStYJsvRfLunMjXFL",
  "key3": "2G4t3Y7mtiReRUHy7zXY7H5kDqRD9k7ApitbN1Dtf6kGkbXE6yYz8LK71tyNpc8DZxfjYvefznUkdq2JDr6nWEsR",
  "key4": "5jV5pW26FQ882tzbBeWV2Emi1eWJQLYvRYaLiLAX8eWo4vudgFJuB9inwCDfLT3MdFBNvpSQ9ESSEW3g9KRYbWbC",
  "key5": "fc6Sgh1McXRMRPUucUGrTQj72hKCqimYQFTKXtcV2MvMusheHsFzJwt2WY8VJbMLoa233WRQL3DcH4i46NLx4ob",
  "key6": "3WonQQwvSQzQjvTnjxkPkvkPAAKgajhLnfsdGbqSELabNv6tu6JUtoRcLDVLJPu1JMcxbnF6aRMv4nWupmn6SUdf",
  "key7": "3YyzMMMHpzdxJWQsZo7UwXvzxc8UyqxuVcf8DVGEZAD8tei9Sh8jCFCfZB6vtEwiyiSP9EPswpELXTPhrMA3w682",
  "key8": "5EDJ3MJRmXxBvfbEkVwZbKVZyrZVBcbuwHwJxbQ7PXa6ziiiMNWGkZXMuCi9icnPgEjJvNWgHTQDrwCT94G6HUfX",
  "key9": "56iwYdi4x7uibkYzzV8FiyfotXGzbfJcfZgJSDGCQQi3uAXgLbV93buyF1YWkgkPKU143Pd4NCk9Qy1fHPsxQQBB",
  "key10": "4pN2WwMhozwWNVQBRrioZ5tNCnRtFiR7UsXyG6N1d4U83a2LXvbrJLVD7icynnfP9fe6sXzaYejGn3YVb3mMbrdT",
  "key11": "2vN7F1gMCmNYQDSgBJSdCWun8hB1KJNoQAU48RjWo8VvnTcNLPP1pf9g7h5LZKhFyVi1U2VHwc4tTr9Ab2SJyFPZ",
  "key12": "2T9t5Xga9VThNpgxq4qiozN5HA2rVB1WhUR7otLoLyatw51kwPN9i8gJ1RqCn1MySiWbf2RpRKcuCp6FAQGfC3cw",
  "key13": "5WrZ9mRWtbbYGkCBs6AA482ph7hJ2JbP8VtvX5PTpHUbMHmoVPffbUNE8imETZLL38Gby2e5KaVTWgJJuwSq9SHn",
  "key14": "5UfPP6yBSMpCoYRLjCdmWaszpdNyfdhwe5ZSkyRPShiVhwqFguRYCkFwUDhCaVoZJdVcciX4w9E9qmVhoELKgD2a",
  "key15": "x4NZXrhZMd9he5Tpv1bAUGRvMm7LihCdErVebbHgtqTeyt3qM5KhavgD1WbBUKNoDxPszkheCx1V4ZdNHinx388",
  "key16": "3ApXbBCkhHEJ7o4bYcN9YbvA4QZzgkeY5tx4VWm56Cc3c8xF4KxYSGAQRh3T2r6E4mixhwxXCuaLMnEYLwnygqqF",
  "key17": "5tvpn8vmDHEibxn5ThFftTEkGp869CekJCyQF7iTxFzesdEMPsqXZLBPUuG8e9k9VVUpDq4zn8iy3S79EFQNFNRq",
  "key18": "5T6dbZxmdFG7bXEW2qzWL5nhFyoeQp4q7ejaNoTk2MMe7TdDHSA3PLDusF5RyprfuKDEocPXxUBRHZqX3HRLEzFZ",
  "key19": "NhEAsvKJ8WunZmD885ftAjp5bUz7vERASfFrV4jobHFpwZSq262TmyETzwGKsj963p1nn8PPtjVfvPoEHjasgZN",
  "key20": "3VfQfkSToasL8YVMnuSY9JVxZo3yfjWSjLho7MzJKrpzbgi75eKbLofgHqfVgtS3EyTEHSE3WMvLdjVHrN9zd3Cc",
  "key21": "4kVxhCahHw21P2WNpDQKdSS2JeVCT4crNGmyksfiU4jPT8CJd4yH79fB5HDS8AMDwxaLX22A7CFYN1w6YWmz7FoN",
  "key22": "25R7n6SxFQgYAS1Q7DnUT1SxkibRNSrBnsccL3qwXpECeSSqT2pDXM1KvkjWMoy52nbof57aVcbNZ2fEqpDr4ArS",
  "key23": "KvdvNAecfugajoXqWfuxxw65Be9pFCCbbQC4W1Z6xG32o7gFn1eKmR69FLBG3wd3WCup2Jnec4FZgs8HgRS4xev",
  "key24": "2uTMk8KpSXuoJnF9vhx8i7s1ztXPVCDfkCcwch6YHVzhaKj4Aou3uyELgpPNu55rReCZ3yNwzm1CRrLTj3x5fWSa",
  "key25": "33TdJhGFeGGeW4jXiGGKEafX9vJdBK4wFxtgMq5NnsVKdk5TqYSpSL6EZhp58tRbUFoQE3Tmywbefsrt3Ejt1zE1",
  "key26": "5pMZhFMxbDKquDgtWCUsRB39SPzQeC1NY7swEFdHwwfccBLoLBCskJh6ogUfjUwXhZLLz34qnMwQx3myYkLUra2a",
  "key27": "5yfCSenYqR7Ag46DS3cWvchdP1rqtHSSDAVg9vEwxGJuwxhJWxaNt8qAgk8m5TwBAVD9JRG6Dg51DNVzPNQBQvTp",
  "key28": "4NXyL1ntUxwhMpVHr4SKy1pPKJapxn11nqtnj7mnACeMdJmNYUFucRQqBCYnd4XLr4GFvhkEid9iYAhabS9aSReW",
  "key29": "3qCYN4nQJ3diNjhoJA32TbeSFQ9NZadNgxTtnwsMC8H17XJm9rev8TnzsKoSruVSzGUrKk8biuN2PBLdkvWCN3UJ",
  "key30": "66F7FteJszM5Kj43qpv5pYCe1vGrRCy1C8uz9dsPe5nNZRQeuYiaazH71iggwkiUFiskbb1ExeHtTgg16WsL5maW",
  "key31": "4mq26KDo1GfDRTUxjrkEmRd7yygEhhcFWFV3SSmWYnF4jwnJuXLjr4CjHBZLctmm9RTECArqeWWy9aH1J6dMMVLr",
  "key32": "4k1VQnmuyKkpvxVySJTbHYargfL9MJopzZWnQWFdZfAtLNsLd4kynY1h3C1NTSxohRpQu7phenWTqyCpK3MHd4uH",
  "key33": "2qbt1oYcau8fcjz6M7R8XLpKnDh4PvDX1zauXX6TsSTT8VpkGdBXFJ4ZSnzKLipb9GLZ2bxYbr1S4jWvmSTC5ver",
  "key34": "4HRBDfNjcCggEnXDTvqxyMq6Fx3S4yJ4vLzPHnJVH86GwoguTXGWXbF49qjY1LqjgvXCdY8qXay3f8NNHLzPEd33",
  "key35": "2qdMqqrS56swc7oD2fUyL2jiXBcyrbJV3uCKqfrTxHJ5HGeCbU7mPstiqnLATax7G3sDfHtXcBY5Z6u2T7wuYckX",
  "key36": "5qZesH8EwqFUaZVTCUfRPGLV9a8SUShtEMG8rbsf6pvy8arar2Sa9TPmJQs63sTYEAhRs8FWMgDwrdjLAA5Me1m8"
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
