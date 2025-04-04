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
    "2hSyEAKeCnpexW14CrG6zzchmPjH3FMoAAjgwSLr93GdsEE478jjTupWB7UwwqrBRFhKVPQMCHcL56nfVxHYMxjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yz2vAeapK3ZipK2EMu9GicSsQQDrTvVPeuhXZwye1mT4FyJn2wjUyRmg6eTSTKiBppSyWMXizLV4Xdbo4yVBA2q",
  "key1": "28n2Nnjof3MwcPFHRfShXJDVbqB9DwgH7iiip5wQsw5R7uZpSUecT7tMJ6J4nJFikaaxpsrJetjLwU4kbUj7x5Pp",
  "key2": "qdFwVztrAmtMzkJ1J2GDcy7cS6AZgVLdBTAgjixYD7ngunjvEgJjRbKvyEuoEPtpPZq8wD5TGNqzsRrvH85uBUX",
  "key3": "3TzTVcNXyeBEn8zMGGrSwf9tB8r6jSWkKD7fgR3wzngcC4HFeeQqNoUkjuiMuFGkcqMxGunYdfMRDpBZ6by9zx5S",
  "key4": "25JGyPRNfTv9GTGgFFuQwXgMtMSh1xHQTEZXqd5GXabGV58bof74yCmoJuWm23P1MZa7GCQK3zYGTJyLh4xYRYhb",
  "key5": "5hvibdPEvpPAoz5H9tQKxUKk1arfGKw8ZA4nFXm6HWWcCGf6iMBz65mu9onwdJQLKzHnegfAuF676inULAM2xRJQ",
  "key6": "RtiJ2h8xSs69ppPxHBfMuMvHJ6dWb7GKG9i8F6k9xhijcVvTqivX86Ej5qftFyXgp7KtSStcT1WnwHmKDtVxDzz",
  "key7": "2iZLKT2LpgGLoaFZPHftXS3Pg15eYtTiYtF9XWQt5z4NrLECfLtFQUHqJ6NSh5suxRbvo9fA5uQhSC5mn7jPwhDa",
  "key8": "4VVFZzg1BSYCjGfRnMVj9qPSZSuEW51adXJ3GUBWeswcD4mDeNFGmbEYzxa2C8frvn4QQEhorjYEoQz2K2ojCykw",
  "key9": "2BS6FwCAi1kerDWb9p1VQkoyEBuupN2PJYxSVbywTVGQWNZV7XWzwKNH2iHxWxx36nNV4zRcc45tM2CF2WYHHenv",
  "key10": "3dHGzrAwCtTR88gRH7H7M4tjPCFtXFP4tZji6wnnw2CsgPGQLT7vTgG1aTDsyTSsr1BaMXxRvSLvMWuv7iPj8oa1",
  "key11": "4b5aDAaTcGuzu8uMvGKsRKUT11mmpLVotMXY7qJQL1mejZDBfqjb13aPFfTMwoh61XWCy6J3RRCTvAi2FUUEDfoW",
  "key12": "3hR8gLBHsz8LSmpNhuNt8br4uw6zxnQQNkyJZ14xCjN1DdjyPkPnZYhxriKM87P8ZAsiFty1oYjnp6F6B9tuM8hr",
  "key13": "2zyRjHxSpi3PjDoGG9haoh5s7AKBcFTMTko4Dgn1ys35k7opg3wUc2CY6LcwrsYApX2fQaaDtkJdB9zYMnCVdNKD",
  "key14": "4ngTmVf4et1ps4RSadC3R3VYz23NDKyM8dDbyKX3TntsscS32tnRFZhXZLGCheyJkByGHfVHVci2KdVHxQ7GeFPc",
  "key15": "RriaruDCj7jyjpMUennA7RDZng7gGZQGceobQmGev2wdUsS7VikfAnYsvZfXyikrMPt5pATHvwk97oqBYysGDvP",
  "key16": "2614TK1PfD7C19PsrafeT786mHaukq8y7DHVCwgh6mwwkLDaFZiJAfsH1Ws4GSwKrTbVrNFRAJTf5JF5UofHo9Md",
  "key17": "DNyKde839YW4qm3Nvf5berVdQG4XzAfTtz2kDMCfqiBhtsDXNTC3Zm66be4nsHW3WEkCY4t81buZzUSdE6Fy9ff",
  "key18": "3e4nuVTbqgVV5K8X8wKr8mpapxUy4ts81nyNPA2Jf2VNkSihWVh1QtqNiobeGw1FjapU3nSEu6QwbbS8nNMpL3wr",
  "key19": "2QbVpUd6VJB2XhLxSAkpDWawev5RKRyCUZvMUEAjduaCRQzhXg1ZLH7kMxjjrgdhrCYjqeb9dMmVCsoCX5s778U9",
  "key20": "3VyYfLR92W7Lay7zJEabntz4pNZUmLxuhE5LiQy3DgaK2Wa99VmKPsmWiMRMYZfx9hxMBp5oCTZ6QMXQQ5Geoymu",
  "key21": "3NpwUX5GPumVu7CpXBrSFS2V9jVcXjd6Ks5rzLzp41pJH2ccTzttkXBYAJ932CHSn69LTwdNjyB76s3Nf7jDubTf",
  "key22": "3stGEADK5hDN6gC7BxioZhb9PtCy6PBWrPkxRQpxgpYYyFzigzFNooCsAhCARzxwrYCKteoxqGHEdiLfkKSeNoxL",
  "key23": "5btjyAtSTzPfkBa87RrmzQukEqAHSYQQh8xna2MCxbGS9dprGFJtnLJe5iHy67m9LUDZRZcNhVr66bdfcoZuTifv",
  "key24": "4yxZxdPZdERB4uZpgJSAXSPzt7STNS18GnmrnV6vtXhCneVA8KtdovRCxPAaczFSaRPcQfMjvfDMUd2QwbM3tvK5",
  "key25": "4ecXEiAqXzzxEMvFmrKa5XYMGX4aoM6NBx1xuy7eWngKy7FZS9CYgvbe5oHwvknX3z7hAwEYChjWttv2otpUxjru",
  "key26": "4kZmzEQUHZpHbDnrJvwarHSiQeUxonAeNFWNFhvLUKaJmYNZhVSztjU8FjkML5mTabp6zAsnRzWFHg3ERGZpBY2m",
  "key27": "RDyZTTmsjk7eBwafLCWJzxk47m2yPAExtUpV4VW8oeBXECULsoHVTPEMdB7m4XQ7fBQiRws3SZR3p22pux5AaNG",
  "key28": "2NnpfZi8gHxYNNd4GaSDh4mCoPxeHL55ZgSnShueXRKhfE5m5ZuYfK12h1UPcGeAQfnbCNkf53vjFjvHtVZkzvJw",
  "key29": "4U56JFs1BBTz7tMQqgChSGT7w6ARhjsZN5GaTiBCiCGaqDLjFK7LBTQdU8D8FdqhVNkRz6isTdmCJ3J3eC3hRPmD",
  "key30": "HnUB1umNzXR7cm4RmZbEEtDdHhA3J6tRwnpnZ5XaFpgRL38jywTkfnrjfyGFKRqMPkpQkwieA2hdFTmHpN6Vmqd",
  "key31": "2JQbJFgbhZni3ESuNbKZ1HS798U3jJrGxzAut2iguMMjHbyqbhoZdSbXDTUr5yxvUnsYKAJhonaAZr98xFKQVm1G",
  "key32": "2kh6XH8fob21knT8VcNu3Fh71VDeN3PNpdhp6k6h9jyF1bmDhcMwpX9Gm5Gu2gXuAt52QFXiQMxo4V1vdpq49B6Y",
  "key33": "5qcFzYwkFxXxXFra7pMPQQ69mjB94UrCgtpjYi9SdSZNtnuER1saxsg3ZMYdqmUZvLYaEeXh5mJvtFn3tgmN8Eaa",
  "key34": "3JtQxnfLFjPKXoPq22jnEuEhSQdcASqMW4T8MSS5aNnocDAufd9YRcko6VuKNi6e34u3A1pk8YHkrV19iina9JYE",
  "key35": "4yEoSGoTWfKXuasnzq5wGhQzoGykCGvo3bDtY1v1KqCs7uVYJLTUZtAcwB8MFuivC9Mnwv1msvDemd6SsuGxhrAr",
  "key36": "258QxHKrLusRe2MD9GsmVVfpbPnqdicsKX1fWbqAQKjDYRjKpubCw3qahobzaZDN8ebcvzsKHyqHVXorUkkDPPko",
  "key37": "5aKQ3ru7F74e3H1svCrztcXQD9CVVSx7LTPXXaz2dZCtk676SXHcF2Ez3ZLjhD4WLAsQJZ4s8T2JUWNGhFFojxJk",
  "key38": "3ptqq1RN65RAqZc7H7e8WB8Rqc2xdUDGGuHhrRkw62Y45Bb4fCFs1Y4vWPxG3sjNPGx1dNkxUkjRTpVTeVgqQr7N",
  "key39": "5gmXnaaDeRDqwNtTDPVwmMMUksUFJzmpjrkDLuMipm7SkoG2pwkWCmjFPfvSY4GfnWVJ4sNSQYEDGM85Y16VZRr6",
  "key40": "gwFu3BXJbaREtmE2ESCSFBQbwhsiUWmF1mXHgNEanQGvGfL9ooPZbUGPAXJPcEMfFYbpLX4mMFUpRVbLMGiaMBV",
  "key41": "781n8uCjC7oisLaFEZLEHNssveahwF2NJ1EDwonbyDuMiuJg6gnq9LyNCczdPCjdfXPJ1hywPDK2MR1qvXHnw7Q",
  "key42": "LRFNprQ23NZ55Av9s4JcNqXwny7w2vupyJj6d4yL571GMvruWL4gVTSiSaHMqDn92UnWD7KKjxmck3UDMYNXpAJ",
  "key43": "RtVtYCbUfFgeoMT33rYkpJF5Q1B7vBdNsSrqPhAnDATUEcP7MkrVYtMYKycbN3cLxoefbHRsBMh2Q6DhgSKhpju",
  "key44": "38JTQh5eG5CDhdwsVzxbhRQSC34PSt7AWUiNj3fiuBK3CVh7HFxmupZXfrAYM8Mkvcmx4YXbVWzJQDTXGrv6hoXZ",
  "key45": "3DZ9Nq7uoMutAYMa28tCLL84o8zVoM2crG37LjF5r5q6bej9ZTpd6gDH4JkjgBDVaKPAMfR7z8B3ToEy7J6tAfLw",
  "key46": "4GnfNDycvmTsU2KUHqKkwpdaD3z29frtHw2GHpXS3vq2spJb9eaZD6W8CKfkv5xxL4mygw2CRP2TpGtitqRhzrWe",
  "key47": "3bWzBa5rA5gaghKkRRKoseVQ2hgffYKEHd7T1hSpC4MdYg2iujUDEoS6VzbA3AMjN1Un14z8xokJGQqEvDppVGQ9",
  "key48": "2MYqsAncSUCrFgz2w17kZNNohR11zD8gVfniym63mKPteDfGmR4WqvrBuj2GNGUwvs6KMSdAv1bCe5BGK6NEcJnN",
  "key49": "43iBrw4mqDQ1bZ3V12VMgKoXFPVz1HZ4Z7zhRNkM54GdARFJkZnQXsmmpJ1UxwMbV1ZpEKvxchUFGyZfpLpgfCnC"
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
