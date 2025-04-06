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
    "2J7v5GkUrndtaqhnG1xZvGHkqUmP5zkhQHVXCpPfki3f6EVe3cYUhbKa2T1WwEfRN6PR4MfLJcQpgotVywCDrsuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mB1PV63tCknwuxQo3fCp4M1wveCbaz8Q3hNGXGy2qPumnSs7zqphv43bihwQn8tz7LHMjz2sK7jBe6QtaJv491Q",
  "key1": "5QAz4AZdhVgPQVVG92pK1dS7wovfFrJU2MznwmpqJ1q6Hqk6cxQAyJ1m8ncy1LbFui26unmorV8dmtH2ALEuJToP",
  "key2": "5HLiqsSDL4vTN4vkijXQsVcVKFL9ecukC6icro2ALUbm6g2fvJuiVLHTNQaP8JdNPENpfVSzaWQcUWPKDWi6Z6t3",
  "key3": "5gwhrh59BbvDEmhBLgtYP1mYwPttnnWt5FmmLxPs33JXZSKyfcjKD1H6eZPHd3Thbj4Bg2zkhgELAGWUhcie3Mnz",
  "key4": "3UdEcNPanj48EnDcgth1SAj97Qb5jzanx1e5k9LX2iBcZUqvnqJJF958HaQctzaAm8jbuGQMKQWtqro4aetVJnSk",
  "key5": "5iaZRh1FRHDkWABeV4WzkbzFxtn3cf2pohx4JiJjoy3QaJDTpeDbZ9PgPWrf3oA6oanUP4mtve6r7H6LvLWg4sun",
  "key6": "3gakLEj3y5WaUw1RBi6akGDfPKVi5Mx8yy3J9qnGRs45mLpAytjNukHY5kuGqEcxX2cuNGEGA2m6D8MLXvcyM5fT",
  "key7": "5HrWMQZ57SDyFHfwMqBR7VivpQU84RbNSmsXuHnJVr4RoZ8AdYZLSp7xVaF6k3NhbHs71GfD2sHZD4pRHt622cud",
  "key8": "5DESW8QodBvLJCe8wmCB8XoGQ7fu1gy7KA1Tt1TDYynW91SJzpcKBs15TD52z3sPwxRuWZVifoSRy23qxspSfcvH",
  "key9": "51MZhMteRXpzJi6Z3xH74gKvAz7DpgBG1ys1vU7bRuxXEnaZ25gh7Jm8nmobEUu4GfPEyUW3qi3BRAuyJzGJsZud",
  "key10": "8MApdzfBoBHKAkmQ9tjVE98c9eiESFfpCZhQFVpPc9BLS1ZxBWxAAkyLSECJX1Vgfkvmpd7aWmnLfXmrLHFz1dD",
  "key11": "zagzUtHGwonDQ8qVi9P93oeV4VGQhAmJrG7N8UC9ApjfjKMhaEgCuTm1cAQYMPNocYoCE5GqJXqx4Kv3de7bg3M",
  "key12": "2jXoQjG9fc6FsmdH3ak6woo2q1Jhookw3FUVzcnz4cymCs1ce8ftMesLEQUfQWBhAfpX6hpfkfPehK8HAAS2s9MA",
  "key13": "mytfoDBEGRisSZuSsyzqeFp9k8sauf8w6KDmjLoQVRsRBQeQmE17ywYYdP7xPDYBhn5JYPpXmwX37cprqPdsSd3",
  "key14": "3SWBq3z1Kq6ewGB2aajb5fQ4fJHx8y2wftEjiovNNeyxKk5KxaoXKcZJEWWiHonS5XyRH37VHKVmhq3QLmf7BGLQ",
  "key15": "4LTYJEqwPJpiG4PHfjbi1oMHuJMRmgHr8CKX34pj2JE8A23aSZnm5cVRuofraxKLhgeuZPtJGh2FnAuHLByJ4UBF",
  "key16": "3GnCJQiZMCqyLVRfZEDTH2BZUqyd3C6y1B1az2KeGUmz3XFwqSjW8QGNs1VNXciK27gNMuieek4GH9HKSBVcdbRC",
  "key17": "3ecPz79rw9EfaHF6Mj4SAcU1DuAaEZbJJB4qRUb7XbvdV9zJRKRK4A8RH2aox2p6Sbw2k7e4S9b6XXW8AcNnvMLL",
  "key18": "468bQvQFhgJJXKSgHobWpuNaMMYhATQWvJjWq8LniqBarnhK5uYbwcZ7PowXv8ZTMXBWCGiF3vDBJkKbT6XYZym7",
  "key19": "3Zzm8DjVEUaqPysh9y96cv6xYTpunDW9QQRg2Ehkz36yxsj9srTYoWPfc5DdweKzzgTxyyyUuUEnCw6cdMhmJHwD",
  "key20": "52Y16FSmnJKmJsvQEGKmzp8HnXn9fcj9H2ps7JXMa6kEV8VwUUyaiSB3tZqzR2psaXCkENdttWP6qYLy6Eu7eZdu",
  "key21": "2YnnC92RYXr8ZKdzADmrJGFaH2tc1aAeoHfp2xZRZeECmEZq2YdMpF7WoNNzngNyXLvN2Fr1xFYxEHrQZvbTFZdz",
  "key22": "3B8C2ccidCN77Hvib7JyCat6a7UhLPZuXimytJTMJtCENecEViAQdzotHNeEy7SuYVdnYVpy7dL3fU5GQVBWtw6u",
  "key23": "49UopmCpW1vz1vhQGn1xFUFcjGnn6TM1WzhydMZertLiDDfy3VQjmyCfpM4HpYjqV4Yodwxge2UiDuRTyKrZkV4V",
  "key24": "2xc8sbkn7gZe2YCCyzmbwSQkwvL1oj8gJpKgsCXRkWJWUjYa4Qb6omY9sbR927ZoY8Miq53KFP2ouEnPBctoeJyd",
  "key25": "41YyD1PyuCkEV4tK5wjGJo324qouKSKLAUf18KfoUKdvREYzXeHsuGSeeQvvavxGsyqH9QsiphMNei5wWwVJHug5",
  "key26": "5BwxjLnpfdBvyZMwZ5NoVtdc27EAuQZKu4LeZLxpVbPbLLAAvYdHvn7NwGRLvRpyceS1nq69aPxubTWhcVPdRVbc",
  "key27": "5XqUsqNnmADpsqKcaHv4BJBg9fFGKZaxhmsJA2mb2jtY2zeyhBC5gZskNbx2EcAYKuWZReUD8rP9TBkLVLUYJpz8",
  "key28": "5uwNHTaAHJFVCmR1SwpfN3U2BfjVKetLQhP25fbLEUfAkKRgpyes2jqz86BjYy8yBaHddDiKdmSn3gCSrwj6Kw12",
  "key29": "4B7efPduBNrJjw5BS49C7wbRdDvCC8UmvfsBWkQ8vsgQycpEBFqKsh5V4kjpF9acbTU6Udf4pscFhShR2ydt13QA",
  "key30": "3u9RQa1AykC7HqRzuCN5ojDY7yznmd8oECVogcm7XkstnBSqsjVK3akbGzF2PP7FTF6MyFkTnE44FSBDE8C1kZNF",
  "key31": "4XzhB2rFgkKc2cieRcEQiWzeyVG6BHvfux4ARW62bEJspsnvkBmfijEQK4sGvUDDe7QqeP48JjJ113g2QVEHazyq",
  "key32": "51KKAuCLcGmWucT6Cdj6cYK6EXaHAwXbPS31HWaNS21CC5t8Sd2cvVFne3Xe9DLm1GGzMZDGdKS9XwvegZYR8xm8",
  "key33": "2r29zer7vCdr6hFF6hMLXoTnDbyVuP53EjaK9LrWM3jNf9EhfyLiFKaSxnB8Fzfs2m5UBYWE7GDR2GKPjikBgRYh",
  "key34": "5HghQNvb94Qb21YoaPDAvMGF9YgUxzMVTrLrf7dwLqRqBwBDpJUQFVQGLz3D2P3ZF1NVg3etHZSApXjt8JxUpTb5",
  "key35": "49pJMEVXGXQCNyyPikx9G5RbKZV6fks3Sy6JSByG6DydbQ2yWKLYJSrTiTdEo3hds6pEYCT2tnSyoufG8VsJ1qj3",
  "key36": "4xL4eHR6XgLmyq9EJgpoQHg4ZgbUAcYEA2bXGT3Z9aZeTkMadGGBCY1kPaYS1wQgZQbFGYW2xqiXXLZEp4dmDV3k",
  "key37": "iDZkKfA3Ki52UMrbM66TrExkkW3WdqkjsPUHRSipjHZwM6J9ce8v2aM8ypjh2SE5sEgcgqV6624ygiw8U61NGDh",
  "key38": "2WwwV2qGiaf2eCRZe7GSM1cVmL7ey3B4cPLH3eM1n5SW83FfHbW8hHdt47nDRycHbmAFtzLuQdj99bD9zAFwh4Vp",
  "key39": "2A8Nqj9TLPyAA3FmG3MSFXHjfXMw4q9xr4AbFXVJFsP4QEQpmNEFgcHWUCX4DjVVZ8ds559g1SfhEFp69urpVzUH",
  "key40": "2iMQwkuzjcyPb67HHKtrXviXHjt8NZA6gJyzFT8ugGccnjz55qE1EuHf6tyWffcY4QX2kpWwprXsgoK3ur5tLBFF",
  "key41": "3dmwf4kkiavPZp8y6hxt74ErCCTKxHLtVorVa1aKQvqERPurrhP36KVAKHMRzdRhHTH6PswVbUwf7DVQqxenYApP",
  "key42": "5Dj7nMX4uAPCEjDQmQ3CBpe3NTrHAmKZxjkXqe3TLeDmnn9RHYFEqWKfUKhVxPZhUdLcanegBYaPuUpETC1xT9o9",
  "key43": "2pYM3iGkdhg62KHhej4iMuJj6mmCpqQPwZ8dRMyT2L39vSU1Ew2sEKk45m4rXYa9NiL7UbB3zACXpqkyLhXT9MPa",
  "key44": "o9BZy2ei66ZPs97PbzPCAihXQJh9SFfpdammLepFx1THq9Db6G1UrSu24dJ89SFqGWsPcmhnju7yWEybHp8PnP7",
  "key45": "3esdoGsrQr3C7NdxfKrWmNUb3z2bBQZqPrsKziaZex3MvdA5iChJx19DqFqNf8AfC55HeqLuG7BtZZonkhwdRtw2"
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
