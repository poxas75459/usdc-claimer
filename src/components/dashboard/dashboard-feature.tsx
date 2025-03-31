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
    "5rxwDbht3hbnmKXaKNxKJps9LRsFpXsrn4PGhxFEAED9xqhzKXsuZr9C6z1p8f6wVxhydAigby9DN5pCWmW9RGRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHXmvZywc9awWQAUANmXxRfmm3hhgDs8LuRk6bhMT6FAcU63DWpgc6w6re4XJPSebhj1nz3rG6bnwxhECP2YXGp",
  "key1": "3EdxCv5PA3X8qNrGwecC6MS5FmNmaMxBEwMr64ALVrts47FVxRUdaJjcBR8bXq2E5mFanqNgpxujPzLMeoLPwUcX",
  "key2": "5YKFhoQCqbSrfJs22y5cpeBSacjPVmGJx7PApjUJPK1vZayfh2b9bNwfv7iZJu4BX14eK77uNSD6JucqTYEqwCR6",
  "key3": "2Z7rmS9RBbXTqQg4YtWfLAkFSGVM35ygtqLLmzsmB9EyGh2hgRAHFbbpYhFhxL62j3zbgy61pk4gzRYfAwXvomJz",
  "key4": "2be4zVW5Xs2hB34Fmw7caJvJsW2gBmfNcRmn8PfobokusqEofatcNpH7XMdRCVHf8YZRRFqc3JkcoMtHaWs2vFxp",
  "key5": "3BkbXwazxhSdbNchbW1hk28VJSsPLEpa6bP2EAfagz1przNkPaqAcocanmsoZvYWDSMaTseFHWLFVvm55Whyk5Ln",
  "key6": "3GUApUVQPQjiuXMyYToebJVNRrTy4TBVVTxtNrPnT8ri2vLhfoXcj9VYxrermnfVZX7AdJHd7TiF7MZKm93Jqb76",
  "key7": "4mnkPQavGxEMuA7oBvpNpJdtmThFsu3Za9jG4EWiNAUw9qSZacJxVhTU2th55TGU4PhDCzHPezSFXdPUDGkjSDzi",
  "key8": "ccAKWkvj16fS9X3t6dhxbP5sakC47Q8RpnSoHeCLmvhZpQAsWZ8nACM9sqejWFRbmJaQVhqVNQMP6NKbGcyJZSM",
  "key9": "v5EvYzXvWNd1ruEhbRuBc9UZHagcDw1Tpt918Qq1nC43bTw6KkMcxquuRnMyGuUBzRyUwfpdj1D4m4LQgM7759g",
  "key10": "2TEF1nCcY4mkRKJMjp2FucUSZZnbYr6nyBbNTeyiu6g8zcd6XQFf1W4PoAXb8evEMXhP9yMKa7ji2uScHdvs6KeA",
  "key11": "Vxgmk3hSbBzV9fuFEc6TYgnPsg8Y5v1F19DCPLn7H68pBY98MvaA35shGkzdCfgSEH3rKjwskqzsDjDcprijZmX",
  "key12": "5rwTy56cVEnGGLDAYD6UNw9sCV4yFvxfxLeKbcTPdotNashL89oiLFF3t6N5PcN61RWH9JU2KP3CHmBhnwZxGf62",
  "key13": "XuvXgJCNfdce2pimfjTCHdRLRGh72oTjGMbrqoscNm9rCdyfzEKJqCYg4ib8ytUQLPNZB1KGRw9GRDFrESC33j7",
  "key14": "4KG8SiVQE2YBURip8sYW5P64FkvnrqWeC3HUufxQgzAdRLpg9eWZYZXg9mf31US1AD2VoouN3SmSNEyuWDAnqCXn",
  "key15": "4pbQBg4smYLnVcJrLxgkvoKhWVF1XDixqXqR6ifP1QWcCp92nsEuxHvro1ogUVSyZB6kdSUP3xCn3TYy84KdngMu",
  "key16": "mBtXM6sSQ7FF1pj5UcetvZmkgD99dvnAyPGE8CfRY1BwxC42jABFxENpYkdnDNtaQfjLzEHXh57qcpXQo9ErhBR",
  "key17": "3piNMqi7jEmjfoQTTzVmz88JXZJ4V1vk6AQSYFwCf3Ja8J5vZNbyjZaXeV1WuhaA3WvTqANyLJENF11NKzyx5EqV",
  "key18": "2Uj8e1PCQCjNMWKgztMbUYVcx6p17UKUecqwBc8qmgtBDiaaSfoNvHYYo1b9VE5yvh6zH6rEWzqdeovndni1Vt4R",
  "key19": "5hmm8XQV3yKyTy1RndxJGYDuhQFMktF7MYY5w5EbtCTgRYCnLCHMMJB8Mmqpd6qdaSdHkYKVYRFXettZTbFEN5hi",
  "key20": "393kushfPvx2ybP7JaNYBcMk2zt5W78UrEk9JfPwq4aEMf7nt2tbvvzcs22eE212wad5EWJM3fQqgpQYiRy1pviv",
  "key21": "ZiZW8sPHMssXXTVaF1DqCD8f4fFzXPmpujx9B5rqCdsFerZN1fBsfqksCuA6HV6UE5jERnQtY1TrLsp6UH4t8gX",
  "key22": "3brf6JeUGvJgnwbCo4pMBWzPKVDMb4i8zHtWM2k25v2nXqAhL4avwy4fJrw4Eq8V46wJa7uUgDMcB7KPD5nverJy",
  "key23": "5r773vnr8npgkvtjjRgQ52HjnA6wYK396g1XjhDHAq3RSVXV4Au7U79ox6kUrYkJQYoKNP4nw1QLqEKTBtqCGdkj",
  "key24": "3XYSLQqUGZuzo4mGLgFSTJ5XN9fEcPv9mQV22Gw7pzGUgzcwgSEzjRVfCMf4QttauqSrHSVLXujG9tiMKmYHoatg",
  "key25": "3eA4pwWaV9Qnc519Pjy41NTpbXdwfrDqi2dxcryf4XqhPDdw3W9zcfU5prNNg232dYxeqL8HRnSb2Aw7Kq9K1ptu",
  "key26": "3iESgB65JFYbYkT1gNxDKW2j21bSxpuZGubuZ8QD9bZQS9GDazNeGmJeKv9xETxrK8WjFTqws5WisRVS5D545HP1",
  "key27": "64uBbsUgwyP6FuJgqSfq2o7cpikdHMww5L2QvdGZaXzVRS3zvGU6ftaudqsJXkgsZ91y13mnT5hteLjpDcQ4dhoJ",
  "key28": "66MjYSDQYLzJcBCh5o6UbKUSNRCbeoiHoKP4hcMiach4qPSUu4UTxmrwns5LKMbC5mHo4wA8kUdgCfaYsxySAS2p",
  "key29": "4bCSybtVJu9dsnayx6GTVwsAuwcRnhdtC5tC6MZeekT1LyG9KfyJqKyjYoPgxUUePhdzC8w3fNEXrPfCTgafcTEE",
  "key30": "atHvsUrWDbaWnWJ31xzp7UBsJdDkKceCPgRXo6zVizZokvhgeGfYofHtTwvGY36EG2ATfJvM9muSQtt83JpnfAN",
  "key31": "5HBE6Rx97SKAXFbJA1uh3ku3XczEp74Tyvpp6sC4QJdAuNHfh2RvvcmZdVAw5Jro6CjNhpvSAUx5vJRxwPkoL8oN",
  "key32": "23heCoVNE63anaTYBAMaDUPMBbMaq1TkpxYEkqxEFyHXyNsBfVNgZhj44otJgjpa8QKqagNXRgMqowgrR2e6rrCc",
  "key33": "2wC9UUT3ZFpvtm9hj73itiahYGV8WtLgztL9qv7xHNNDTQAuthzUoBmB7GzEZRFMyZJcg6gqYt3hatgJxnLiJcbn",
  "key34": "4kxqEfrR8FvF3yKiZ2QEn8PyeUqirtbiXYRpFPmPYifUmorjTuZ7iufER3kgLEMcXmUmoWSGQWdBVmrPHXAokjRY"
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
