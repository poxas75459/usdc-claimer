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
    "2K4SfVB63fXEQf7auRbazG94h2VKRZWKYVRN1tXi5uhoxLKE5LzFFHGd4tH2rkruKF3PUf9sD5BdZpJcqmoYgGhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrPqRCzyqMkzJXHqjntpNp32jF68UhvcCBJAHkbFDU8kT1xZ2gh6W58VoJqaW1xpD9fSkoFfspjwSoiwiW4ZctH",
  "key1": "5G6iRVDuSM9AoEvgYe9xqwTzivZYBTdhpjQM9YSiQFZEx9gnHT8PFxmD2KBsym4wTerEoYoJCPcmGhuMQhTFahWw",
  "key2": "9gGJCyUpkoKsYmoXtQyntbV6TM4wL2ZqP3G6xVHbHa32pFHEcHcJZo1pjkRBBkHGT9M9Gu4bbKqgcmHD3V481sb",
  "key3": "Nfbjm9Ujvo5SPwfmRj3sJHANnzaxm5WjuzsPcL7b7dKtzHvmjnGtDcPtkKv6S7v9QXyG8pbEGQN7aSRuCYdZLXA",
  "key4": "3EzTRFgzVnMrsQnVcv5PWjdwDY7Kw9GaFDRY9uc5xQmcNDZxxLZxncSc6pSnC3SnMg498Sv1CQrmUx7PGikXg3D7",
  "key5": "63n6honjAXoiGvo3d2KRZcdwm9Qyy6zEanYaa4dPQqAQPF1XmqFung6zhZTSVCmDcuXVsjHQwEHysLZMgHbfFDa1",
  "key6": "qisxUiYPtAy2yRXFSiWkFY91WjqWrVKSgqhLy3pj7dfNEEAQcbNNJahdSYJppJgrZ5HyDG7AcZHmYRap1zgLgDu",
  "key7": "3utEkk8pDQZqMQBCJAt2iasPph1xJcKdgNjben9LjuQsHVjNDTwKQqbAeaGsFXFWwdJ2F82cPoMuK3zf5ZJ2WDZP",
  "key8": "2nosYLNaPasQUJ7RVMyaryH1F9vu2ZWZXEGAfnJEcWkwyGnyzmjo8yKAweSzXEACD89uUXH9YSbxC7H8nmqw3VwJ",
  "key9": "5ZLWmqE1ksEHK3RR3SsJUA54TTXc6DoxFm2khx3EK6r5PeFoXgLKdsxgiPoWnv1Wyprd47z2CiQVw2XxgWgzhUXm",
  "key10": "5qfzecTrxNFqSZN9C2VdxP65fxur5oUz6PZMBtbPV8TyNPPbRSaLXvvTEDtgDJUshQ1W66dZ5ViKzR4ggbVrPSd5",
  "key11": "4KYuadrgVsbBHXYSHH2f2ZgBENmHEDiknt3vHwq6dJhffihDdSxLnr51tWkUUdUqq3nxBRKvR6RJyotWooZ5Tpoo",
  "key12": "2Z88qDftrw8HyaZvUc4qQRd9eN429EYuLfXGFbaHZqa1vUmnm291PG2FbXWF6EqtatUJuxJGRc5qENiPC9qnucFN",
  "key13": "2pSgv88sCCowoffiPqn78Zg93hWyKBgueqFvS9tqv653YHYwwSfjUf3hv6b6xC9gpUGq9XKZRKA8JnmMzLB1FDw8",
  "key14": "5CuAFUTFSHrpAf4h6zXpRHUp6rJjVYCiz28mWh49CF6LMN5P23PZN1VG2tQ2dFusunLVXe4sLHUPF9gVZi9ZDjj4",
  "key15": "31puG7bT8cnjdQxLL3BNrvZJazwNmhMSvVrahXZkgu6tNG6VLH2CVzoDSX3gh3VHvCYeEMKJCJXBuXdbpRXxvn8s",
  "key16": "4kVyFs2gXC1nspmLLbQwEx5vQwtQrrZqnKY9i76sTyuha3psfqhw3oPuF8oMa5h57UsYPtqY7g4btF1RkFjVZrq",
  "key17": "44TVeAaR3u8MW2RmrHAoB86Y6HbJnJRNtxMRmavrjS1JNP4DUqbvvUoT7jvqAinBFheycKMutdLnXSDHCawUJ1Xw",
  "key18": "5Uqmqt78zypavyXS2G2ootH8hQZp9qUVc4RtMpgdejq6o3egydfGmBPWve6rjCPhZSipY49xj1F7jhdYs9aXTNWH",
  "key19": "Qfn97PsHhDmCYBEVoxaMBJu6jV4Ai3v1JtjeiTZ2yF7PcfMhaUytCFxmV1ssEWE11NMnPckaPK155U52J5Fb8C9",
  "key20": "38SwjXgNfC7cRp9Qhyk76JuBzxaKFx4BvvuAXrQG26HiM6RiSxLKJd1dhtheR1kRorvcUC49r3ySBqnhyozPMrG1",
  "key21": "5ZXqAXaCZmu833Y7AYgrmUUY4eNkAboWA5ygA75gB12BDYvCT7nsaV9f9dsRje46k2GeUWRSw8wYR7CDkdvqjRen",
  "key22": "4bLuebmHwEBj77RrT5n3CfZ73Lzx4SRFQV8g7LDVUyzJMYVg4qTPZesRumVcvWxAGUyincoEWjjG66nmZ7VwfMrC",
  "key23": "2o1vk5Lq8KkbYTTZPmusK5ChL1LjwqzvQfXXUT7jCuGsWqhdH1KD67QFm9Pzv9RvYecwwsKyAdX8PG9E8MyEcbWz",
  "key24": "8PsmTbDV8j3XHwAqZBDWTgHmtDceFeUpD7V85cXEy8wviTUyZyQVbvpYyPg8YMVd9TrdDsCTLE5L2w8o7gSm8aL",
  "key25": "5DXRyaABzDKYEJdMnjmpJubay92J9EaTziDpKRbZHjc87e2ww3LKdVb2JQrGpb5w52xrCtCZDHLbnQH1ZabpX7vR",
  "key26": "2oWzESnJh6LfUhyES1znfeP5JwxcUa34tQEy9hdxyAGHykBKjytLSmT6AmKDrrYTBkMYJbab24CAcYq1LbtCH56C",
  "key27": "5NGbVHGBmcvSs7WpjhKFx67thGJfBW99ttKawXxhzmrMb8hSLW1dP95MnVfRrf71AnvLTQhV7CdMiypNrSWu6Jb7",
  "key28": "2UGRm7zoZKyjstBhk6cn7ycfAQ1kVpT5A2DSrfcS27nPkUepxE5XLRA1a7eeXHzBVfGmxiYeriKmHWbMJYFBEt9G",
  "key29": "3tUvg65DCZLZbT5fPAQL82vmJCFbeHrLuQRRAVtus7X5TSC5RyusnhfGFySTkw4dqMDVwcd7gJVjAA8hbdynt7Nt",
  "key30": "49HUJ2PwxoJEqQNEycub61f3EiZ33nQ3HRCkVB7FDtb24ZYL88NzFwquwYcgFEoYa17KHSiTNif779oFvKjHaswW",
  "key31": "33ie3ToxDAGHSJb7zpDTNi8DMuif4NdC4PdmaQBbtKTRrgZEyYT3bvUDhkL6nB2CBmUBucNQC4CzFnU3n4AynfFS",
  "key32": "2ACMWRF44vRPftJrfrqR2E1YuBmfvRqGyALaTbDFFHc5jK2zYibYQAE3gXNqzG8BX7c9afYKoxCWKfps3SdaKCqs",
  "key33": "5A62fPg2dYRpVTjqinwmRJb3N3GjtZvJuLXGJVfrmysdtvWLbEFd43crhZtEYKxsJoWFHeTRnHojsJKcFgdx56ZM",
  "key34": "4DnanQ79V2XEZePuivQ5C6vjMAKmkiasMu4TPSh71RdNtfXLyRfdEacbSpv1bSRNspmvXALRrDqvuKQLAvShPGe4",
  "key35": "61mZS5RKDscgeGcgtxNfxqTVRXvvwD1Tvpa9pyCfH5EvquPvth3n2PZTGHdu8g6zU26L6XeMzsdRTZ4oEDCoXg8d",
  "key36": "5at9awrTVqxm4cLBFTLszgwDPP4eUuACXMh5umZ1t9S1ELKDMMeZuYRAEknzaYvDD5giQhtJ3bPUtWDs64sphbgj",
  "key37": "zmcJfGCDXyugn8hCHwKGcyampdyU7T6aL2GBUVeY4XVehbXvh98uB44H2tFDs6UmizFxNeeY55NNG4eB8fKqEGt",
  "key38": "NwdYKmhyScuTy3vNR9gytXPZ3qekAstWj4u31iyPLXAvJzWx38GuEg36vhe7k8nQZMaKvMwovxowYnieanJfSwq",
  "key39": "5P6KT78AKuQVjwdGvNNfN29g7zZjjGNNUZEcRwr6ps7inAMxXgQxAwoKTLAtwhrcak7ByHgynzUbnhaX7rfV9nbt",
  "key40": "6bmTyJbhxs5FWeUsWyErmCRSczZgGtSh66p2GovNGg1Qr5pH1vbjhSPV3HQfex2Pez2kLwyYVFCeY22okasG8hr",
  "key41": "2Gwrc5iHwFdFBTJS4yMTGSp84Vw8SMHU6d7BAgi1Z5uf1xBagXwpN9U8zDkYfGxY5AJTBWFwQDDopdghaDwgQkCV",
  "key42": "3Ajf6JJ2fv6P1CgPFzXsu541NVUsn2op9iixzFY5QuorB26PNf5N5UETvF2XWsxTwezmm2PNjPGva2EH9B4H2RJe",
  "key43": "56DdGCqsctmZSBceZf54Mj1TfnqCQfWmZKBHZf7NeGtYkgwAx7ouHuQh1z4nCHJZUy6woYVR4UzriM2qPveL8ArV",
  "key44": "4ydPFB8yYRP8v1st119nqJPMtLfGm4jPrkgxnMqtNE5vsgH4QhXrr3vxWnq5C7pN9Y3uSCnNkb45SQ55SF9pkkwH",
  "key45": "4vBWggMChhEd1iy4FXXcgAQrjhQRFxKiuGVYmcoPi7iuu5kAgUAzGRAkTHJqyswAGZ3Eho4SjzbSmYhsDbRapeoF",
  "key46": "2Rq9JvzEuJoioRc1YXLZGw7gb8Yx6hxiwap6bg55moPrxqUps73ks5VFNLQDzG3kbb3AB3QM2iu4io8Qq8o3QQQ1",
  "key47": "4Rr7gKauGy6VdiUqe4EFyyPmtemQdUe569pjJZH7svbbQs3HifZacViDdkQtgK9LCm49up5LQsdMB7yEDZaxAwL3"
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
