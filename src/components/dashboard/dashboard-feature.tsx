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
    "5fAunbPWrpPq3xzBK64csNKtx3Sc3gKeBxBdNkRFhwikfsDhzYhfioPU6AqdacBkWAL2xYyBkFKWKGoxqnGVTL52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJ549nEGSjiiNw2ZRUiEbRW6rwT7gjA2mypikXgYiDsJVCVyDsGyQscF6EswRJ6XdhTxozRVZwzEHAg3LdiAwrV",
  "key1": "3Ndrk2CerWSt991aqfvnCLBsGq1NumRgPH4adBNvk9UErpia8jrbwUBAG9NY4JmbjSQRTs4RjhuNZgz36HKBRadp",
  "key2": "526GDDomwVUgdknmYbf4iYss7c1Kpc1zmYHqv9FE8drmjHCFQaqFunH3SNYFEJH2YcC2KYBcMSZQ5w5sMYn11x1x",
  "key3": "4ywGQdLdhxbw1DoasSrNurZUcMuGZJGWYYiai68Pm4uepGwp2B9kqT7oLfRKT2FUe6h1jyN8nViuPBXHGTa6Dt8w",
  "key4": "28yRNT1j3eZJajopoMquDBty75t2tucTheawgK4FVDCR25cRMVfCodE8vPgNED8G3tqHQiZDf7F5gvVi93mEMjrb",
  "key5": "5n1YKfegKB9A6SmAWhaTDCy4UPz9c92Ny3N5sNPPoR9wT8rH6uZcKRMpD5k49QNvFN6UBXpQASnHPWchnJ6fqnWD",
  "key6": "4xGhckSKesMLqrTd7eZhQCh9Frzcew1g1cFuGJLQZBNBR2AebuLUzFf3b5dFPh84jxoyTj4iq8VaVLhF8jzZaVUg",
  "key7": "5igGQ1nS5wajmMDNixbsC729zqdvc9URHHZBb6Dsr8oTdnCMrnVc4V3GNc6om4KMn8DbzGAL5vnmzxHvpw4z8kNe",
  "key8": "qErma459cwkbxM1ReDkTECKpdohGaZjWWrYuJkjpzZDqvssoGBomwScT1TCDQ5iPUqTj5jX1fcZZu975xenzGZa",
  "key9": "2Y5UPFDpZqq7nHUribWEoA9Rgn6UUmMSzH4GDhvy788vrKHQKyEt18KsjBt6Cctud7HPSizLpPCpNQBGkM9pbo7W",
  "key10": "5LfRp9b79Hb8hKCD6pT6tzJ4Tc4qCrHiwVW86yWpXJCCDbCLGApWMZFAopGae1D4kQMUyT2MzuedipFFXXDYzDHT",
  "key11": "4msNDM3XA9jLb4sjZUWpqi23G4RXNRyAJU694DRiziVEobVXdtihQS1VZGKejCP9snDHERLcsgEG5VcdLXTc5zUP",
  "key12": "4qQywMYK4JxfVxf8wPmkGS6TcyTR2rwtGjBJbkNXbHwuh7Rm75Htue7hTVLTLM8smA1XckkhQJVQd25gZrgVwRM",
  "key13": "4obFPHkGUeqwuDUH5DdspJh9FBfbRTczKQ6KoAz4xiU6Jk317pcyhKFBYWsVSgzXfoX3GqUCK1m1UWZeBEEDG6er",
  "key14": "3eSZiKMgbPtRLV3dJLqbgSDmyqvAug7uXFrpYuehfTgzcArqi1JtCBzBB7KCT3YJPxM9HfehiscquWq5qLLvmLtT",
  "key15": "4WgWZfNC5EuYLP8cLYJpzVqgx6c7Lx5bU8c5U1zGDK3nnuiRFLzjtmAH8dJcbLQS1cdRX53uEp44TvfPBcbqCz3w",
  "key16": "2r6RG6DPADr5V71NehWMCvD6RNBP2cYehSbMWWCFHhpKko52AV2Kys1FXiF4q9stsLmP9YxNLZjFC6sn2rjSXPdp",
  "key17": "4MKVX2dSBt9KXgkj6VZasezTcDUaF7qoe7VEeCG4Ch2FZhK1QY3ADNesw19e9HJjPMdvz2RYtdtpP7DT1KJ3F9AZ",
  "key18": "49496ofcEwg27jSaT2vW9vBceebs94yuWnLTdxbc1PHFSAxodM1ECk1goMZcn7SpTf84pj6uX5oJ6N8LYpQy3u9Q",
  "key19": "3qoDNHBMGFzBV3NPSezDG1Z8u8djYx13aHmWb5Csbrq7X7CvMQByQHZ9GmBwDPMr2vgFhFSsTSScuWpNXjJGEb8y",
  "key20": "2LWJGKUTc2ypnuufCQvmKLWcjN81Am1KwQtg87GXmrJ41CGvmgBbrtkhuv3fuwjUTQ59dgRB9ctW12mKG5tsGugc",
  "key21": "2UxVMeuHfG6xSi1wiYCjpdHqx1HQHFArPqEpCRE598TAB71cg6zyJYJ53ZLnuBvFNfjxJtjRcFU8A6ogwhgMifNd",
  "key22": "5VCRA4Vb7ZwdLWZCKp4gVZC5AEnNHQZwLP7NA9dzKUsVAExYRv7QmbzU5cjHQusUHPEqdBVFxWPZwWv2vAQuYT5h",
  "key23": "54aKcwAEvWwFBFsBf7qgug6R3PA74HvyESYGjQuArvCapZmscjQokwqNZpCYTgtJG3piuspiwwfnJBnpBrtnZi4z",
  "key24": "3QVZYQaSofjASH9orHvVNgnQzy2XSEqWZdwUWDaGLArugVwyrXpYayGqoRghhj51GwXir6S2CzbGioeoaomUy3Zd",
  "key25": "3pW6WHhTnSPeri6irK8o5JZcVSNqp28eBT9nxAwmixhKjMBHjdqEGsZUuCLSh5cpoWLJt8ewgFLVswbn4KW5KCr4",
  "key26": "37Armr2ugQTQDZWNgAEvDLBV7Q4Rd1yuQDDugYMUbkQ1n97eLjZi4UAaD5kcpJjBMUsacphEN6ZAA658vDRT95vp",
  "key27": "3Q6KsrWCvRZW61rmN6fpQqdcaPsULKyEUhK6sfd264vG4SWwVRsBQX4sNHgoW8mK1dsUUv4juQ4yCUDS7zyb5jXs",
  "key28": "4n3Be6G27fnqnqavwH99U84C3Y32HSaQwVLpUj6k8eGXy2ZWk4zfVvoZcPAQuJHHF7NWdteBHXiVDBr3fKJcVTJ1",
  "key29": "4y3usvMCkTpsTL5L2S9V92xzwjGcExP7HcvmxE4mmfKyk9FvZqf6wNaENgBhP2LavKLS8FRsd9tQWnRRbdyGB3EH",
  "key30": "4a4fNxNUYwvMJoWhxRPMtHgawAaVkWwK5Dix3fkTAta6XfD9GfVRUP3t7DSEujEMo4xZxV61ruMUoLEcCyWQUqjn",
  "key31": "QPUuQEHD2pMvS73R7qe3aV2DK43WQ4tg2vskrACZzprFYgv5LaZuRRAmQaSwZmDtiiJcVnPBxTPiU7NtRZ48yBj",
  "key32": "2YrnW7DVCn8u93HdUHXfiRAyhrGDqCnESxzSdTdvb1mnP5EBbk3p98bNdXHjxvrQ96QhoRDucY6UnFU1S4RDBQYM",
  "key33": "37ZfifucdhRtbMwjLT8CLDQPckmaECDzXpXDiCHX5zhCr27Cc9BUW6TVWGQRafUD7a5Tunr5Zubg6szY1dL1XMcP",
  "key34": "5v6hCFEqDu8cyjpqo8tjnm5cu5uGqL5HXaewbfftLcg1pZ7X4qb3cZYPSwppx4pnQUauMUMmbacBz4LSaY6rQjZQ",
  "key35": "LjXQpFN93tJ7cRPnpuyEwBWyZrhefC81UmJXBt79brNxapofHyoqihCB3NZ3MGqcmLymDnCTEhyBdLiw9ANUjhG",
  "key36": "5BJW6M8bfLTJyCt1uJrc3qnTUrsPmwsup6Cje6gpQrm3Cohcf8a1HFwAzHz6Va6yCbUad9Pa5QL8nbEdkJfJHmj1",
  "key37": "iE8bE4JTSvP9di5C49EBm4eYm4d4xFMKnTrwCKKx1RaVDWnWrP9bWnwbdc3LTqFiGSaq94UzEzb932bJjGA42Hu",
  "key38": "5tTB1LXYmyCgG1SCXQBV7Ly3vgGCdJiYm1w7LWgW6RU5EPoy7oJ8a6GbbvheuWnXwSGV1ViSBz6NRQ8XH7QGGpzR",
  "key39": "4eBKD4KDPsdsS6uKAeUJ36Vxxvetf2uX114wfNy7z2BpCa4DVdAFC1fPTPXpxKyUGfAsXUB8Y4zuC4jp6T29KLT7",
  "key40": "57691hMqVZYHhjQyWUdn4EKZyKxLvg1whKrhGfta4AGVENkGnmPzyt1g35bJz7CYJsYJecQaJcJpM9ZnoSKuwEW3",
  "key41": "5wWwZNzCwxaUww8eVeP7fcQTiVxce3CNwyxjP14T9JRSp5QAWLKVgSH1fwaSptGU12LAPj29yePJoeQUibkr4brA",
  "key42": "3vXsRotUJKdwWpt3JufMMyR2MfMNPFyRKirYKBecbMjXwjYRbFoNJHNhnqpKbJEt2ihntV45TkEAY3ujDdP7qcUV",
  "key43": "2P7imDpdypf1yjxB8q62U65VxXLbBs93uvR9W1iaiNNdJzSRhaZ3YgabnmG9AYu1gSTHPhrhmahNeSgDus7QXVeX",
  "key44": "5UxG94npnXfHJVm7jznzh93txfJLKZabHJFUQkBBebua1fsutUCYzFEx87uij7xyhT4mU16tMEiJsgdCuGnvfMQE",
  "key45": "4g2Zga9PprZDdpA7HbQLRS3Xh614tBY55MWxESmH6sS6jMehDM9UoJKsBugMzb47d7UF1kRxZ1PKSuK68vkBrKxY",
  "key46": "G3uR3D7jMRvsWBDrYkZe5ZPXE2gWXd5nnPhgevi8H35bhw9Zj3qXGXQquMWpnRxZ8bQwYCmEqFToTC5YALr9Nnp",
  "key47": "3SJCAuMyKnU7pdsmHnKDuE7bJZrm8qajAton27EAq7SDWsyjtznB22fwj43D6ATKxhE1XekMaBVvpa8hRuL9ZwCF",
  "key48": "3ooJKsSgVCMCGPfaUk4S7zeJVuurhobkyTty29vtKjVnnU8gSgh2VbC4hggS9EL6BnfFSA81YeL8Z4yA1Bd7ejKJ"
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
