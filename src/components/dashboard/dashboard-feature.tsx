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
    "5cJmqrvXMZ4HdRUeUkRrbrRXBG6ysEScDsKPxLvRYLn9YThMpXgNQyHP2MNCRJ61Js9PNfrn4ZNwSZK9D2QcUjYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fJuF3hxXxob2udMkrWfZ8wnYDRALRmcHoVQcj9RaJhbpGspKLxDpRyMaYst4GDQ6x7skPNMJn9sxT8iLoFDHjD9",
  "key1": "3qbnThTbcLdgwQXV5nUn84TtX7K3uPGgvSHHMoBw6uHjgmaUrerfGCuSEng6TLG1yg38tLoFhbp15QW4nDS5T5cY",
  "key2": "4ENPaWNNMZnE2rwdvAePGuG3CaUSpTmGvfPL1Mq6YAjngAPi8sKDxfraHsDS4CypvaEBkpwhYuUcFKYnWoZXEXqy",
  "key3": "54Rjvwn2J196vxNXLYgTS61t9J8goJy6tas6PXC45q6K6cgMNAX2qDRkvUv4c8jyN3LKXX4uM3EiACppJtEnoKnB",
  "key4": "3VvzS6cv3a8kQnwPfQ5EX8cUCqJ5xRVXjpm5dsKH2kWGvL4qzzrr4RHnGBNb64p3keCbfWx8o9RDWi3pKPESM8Jj",
  "key5": "25JAjrgNFXmx9eh7Vk4ra8BXrSpMMGMjUkUoBwkhThzEi96mDVaHAjdNexvrJfvaZvYdN6fEhAVGn41g61E77TQs",
  "key6": "3QWAf4SxaFQpDCxjuemDEob6SPVgCyXL6c8kiEWZY1quSeqA57kA3rd5TqhWWHwArjppDY9AMjPy11mMYwCtUubR",
  "key7": "3cH9PL6HGbzSqNKyLpvaJi3KhZNUcRdjxQtznyDBcuaGkCV6RWsNEj1rkj9pXZLjU9w9MBP2M1xhj2eqrWHkL7TF",
  "key8": "4RskCXfWHA1RgvbL1AJZpf9AEsvCwWcy5YxpAHnsm5fimiVjBY4hZVKvTzgGKjQB9r27kbr8uCfdhVUqqg52Jrng",
  "key9": "4GyUtg8pbb5aUxGXxaZQ7jkxcwm4o97sxdabfA4YhRB1crkk4Pr1S49r2Qa7qPCRV5KDCD1sNeJz1NG92yhR8oda",
  "key10": "2qrpVWtW5zhYHzgSYKZuvRZqrbc8myJYBAjA8JuSocjxrHSuc5nut6pxsg3gfjKZW8muUd5KwmfAHGQ1dnRenH2n",
  "key11": "2kW3e5ngYdn7ck7JPmWxpsavdDUz2YToqac3L7DQz6Dcsg6748xxQFLZCSrDKY7KvUSKUiE1CyhQ6qAxKZzpRJFe",
  "key12": "8G1tFTaRSRV2gRmbgqvxfgTsBXxzQTPLMNH8enE8ykPZj6Dcfc4a8cpSK7ExKhFZUcRbEhnbNerxe15BNVcmdNd",
  "key13": "598VnkUfM7cAnGS5VcSrc4wDL6RSctSp4AsM7MzXHA6NZQ3xEe7JRAsf4A2zwmJd1Z6xUUwnPzthobyohEe4hwdD",
  "key14": "YsE83mZrtBHkMZ1ys6d2Gtq3dHm84nq3ryKM3gqeBsz1WFqmvMBZwiKPNLcahxLnoxAgtFg89yRGWFbBQ81NP5N",
  "key15": "4yVkHRtbyxWN3svJsqrU7bH5SXeSiUpkJPr2eV1nqUTYR5J2NAEeVAzmAK8Xez8zE52Sv3NNCAZiKwHu7otmPmPV",
  "key16": "JLyDq5Mz6d715fZe6cGw1RJzch7MGC3Mx2CzrPVPKbgH3tpBUXwExhh52hLXF2zoGgaggUQyyVNkRh1YxaiRcyT",
  "key17": "42XvuLa317H4iG1MeK6kGWE458JFx6bCvLDqv4kVwgxW4VcgayGYEvh2szAcexBun1k6ri9gfUbNrX4B8srk64X3",
  "key18": "2YC3mLfvtdHfWnDUeyYF6E9DMe8k6xJuNi99ECmKBXv8UwpdUBmNiECeT6KumtA5rxintwZSQoDqVcLqkwccutWz",
  "key19": "4wpvDiBVRDohiWN7wMcmQ7BQfpBAMv4TyBDnKTjewj97c554f2rTsArVExTcSDLQqyvr98oig1Cja5EZ5hLRPWWG",
  "key20": "3FooSMuR7iJDEyiGM4SFXuJsPpxshKUeddD6Yb1R6Zg7onZ7LC141LS3E4Ue7LpQGN9NDB5AjoYHzjCNf7J5Dp8e",
  "key21": "5KSBZYS2YRjNpLtX5zyqQhLqSYEfJCsrCLYSEsidXtmtaxkbqg1H5GS17wCKortrA3uPvY6gwn6JXsdGPvaX414R",
  "key22": "3sxo3GEJkwYLtfQQwa3rvwVX6VdhxLNdL8Fktgp6aEAGbvbYXv3uG9QoushA8xsfZLJ4JNL2ScgqC3TVkiQftaf3",
  "key23": "ctGaCy6McLZoEDJU2cdkCHiRzArCGW3zARD6fEC9Ezzs14SBp3V3yoGT2tCRbL2zB3AA8u4mVpY3aeb6zfduVX9",
  "key24": "25tCNcGByEBUaaxyysqj5cVHMKnKtkE4ywscxLMgoC5B7w4wJ7L5hf3BKEVrNBNinRBuCrKse68mQ9q8Nr6VM64x",
  "key25": "2yvKXCkvDShniWdm6RsBXWFmGF6oyjk2cmL5iD6SKDd5mqBkYWsp1Y4YWHSrcT7Dmzpk7iHcF89S3GobzYS5kAYb",
  "key26": "3QD7ZWdxC5b1MBuq1ynBpfYpDP56BVo6SzKtZWTdyXBgVsc5sJa6XsPCE4F2rZQtnCzrAtKyTMkgSCLoLsvmWHMx"
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
