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
    "kohqqsCM9fArLv7UPeuELCyTdGN73dC1P7xDuPNZDCLoYS5hiCBfRhDSviPYgGDgUBwCbm1XCk3D6S1tpHTCDMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37v6Sspu7LMVyv4hx7EzwTbc1BYPGDVwmeTQMDBZX5zJvbgrvWYgpAypWoi8WYkRejFzLnhmZnSFeCWb9148Pt94",
  "key1": "2QWD4LmFDeSErFBpiATgZEvhv4W15nESornhgPJNn2PnnqVR2iV396AJonVx3t2MFc36cVh34BUnF6JvPwKSU6Bz",
  "key2": "2awxN3dvb1RXfDL6tE8p8kqVXKFGLsnrZ8h277TbFYv2b8RbD74ExENKE8EQA1vqgBgGPauVYA6GPiEd1u5uPjDD",
  "key3": "2Mm1YJ6EjXMSQjwZYyEAtGnS6QLkUDNMRKAuKtw6UeqcJViyH6mJEucch3NaaasEMKF4mbSrYh8uA2PB3TJVEKa3",
  "key4": "EjsqdCtJaMvTj673n2RVh7NPPtjegov1BN4msn42FffuU8c1T6srFLwwXDGUhc3uchkxFofAPJeAh6yNSZejVbT",
  "key5": "2xqBefLaCLXDcpgjBG6nJtcoLmS2ANdDm4EnuKQ4CT987NFu1gdvcfXMwtw1HApDw1QaRSHNRN8FnWzCFwqz1tHK",
  "key6": "jEffrNbpQHVBTknqn2DWhLf5rHxYJ54NjrcfD5J4SjQzfhuFY9ePDM3dXa5kCFS5unwksE7DBxyAyB1E3ic3gfQ",
  "key7": "32scYZENP3RFPxJYzA3cdL5PWqQc5iKcXjGZMd4wrMvMw7pajJeQ7sh21Qx2tDcxAdSJfvAvQVaGH6TCNLCdxyNN",
  "key8": "3ofDa4CBYPXccdkCbP4VRjjUdc93opT2rwtuHCdbCaquRbArLDoneHEUwkS73hvk2QGaeLzaM5BqhL8exYrhZZ58",
  "key9": "2mJ61rXUggTDoMQbbhCxX3xbsxKQTRxdPA5UC8mGgoHdjuriq6G8t7DF3PTFCiDgxuCMW2xkg8WBLcuViiT7onhH",
  "key10": "4PgiaH48YJmxgqjFz1GTEzdQXHTwaQh1soMUPc7CJMwyWxbAMAbVqFJtPx2STXKWuDoN4uakbyDv2ptGnL7KML14",
  "key11": "uEmwbjufD4vRJFRc1xkEuVe8GEGHoiaeWMXJLXbjULXTKgmCf3dSgBC3qpsjXLe96Xpw6QadcvVkrYkNU8dUp16",
  "key12": "3f9QKQPwkZKjc8Ut8732dXRHG7qqWyoNd5yQ2NxotknzjTeG4gpXtew1nBzMmq5afRTkpjsRxjaRB42jm4n3uifP",
  "key13": "4W1SgqKTBUTQ57rVFede1PhXNktGdoGMrizAZvtUsaVZ8w4rAZ2K5C35m6No1G6r5JLMBjQtRXMCrR99HCYGNVGc",
  "key14": "kYKSP5z7UYTnnFqzphUyJpTv54F3uYCqEqEYf29hd278Szn6Fh62MVW11X4qTEzuKa9tkLmKWDsWcQZFbNdiHdj",
  "key15": "4qHnKCqWfKGZBkE1dDHSRbcfuEdCYHDmY6i2RtjT6giD2sTXdpva4rXpXfPuSxo873tpZhBTYMJgbua6siNKKwp5",
  "key16": "5vrBhmbwV6DaPvLYugY3j7vqCGcrYap3p9esj9KkmTc4CTjZFtcqRjMDgSeZsMu1FFvMZpZFGcwEPRFSCqsLx5FE",
  "key17": "5mi7E4BsBJZAA9T8FRjfgMSr3r2UbtFCvZrD6uNdYTwnzCDmtK9QDbqki6nMrHZAqGc7KPkYFcAAYjYcQj1Mx3Xh",
  "key18": "4QNqJShUYsrBqP2hX1bZfEexuMJVJyTCooJGpdVH4DrSjVd6T5aVSjh529ag3SdyM4shr1NHej6222FAqf4rGiX",
  "key19": "2K72kTC4x659R82zsY83YLqWV4oG6Gv4m3NMDuiTUGmS4Lw3CxurHm442dD4SUBd4N8GVrYovAaq6JSQtseDSEyR",
  "key20": "2pPTuasyiJahLydJaNemriYuahjTAxJ29sCRVGwe4qCMPjQWhxoni1gTAHaHYuN3xvrzbL4D5Seg4LQDy3CqdNwV",
  "key21": "38gbAAfWekBxFT5vDAEpXYtTMpCMMiLZEX2hbogRHNWUtV3twaUFdPJLe8MyYKWp8t8vZDqfkVHY23S5wEH2Ngro",
  "key22": "39FCMbscK6aVJ6uuHuEUySsf49USaddDb4gBmwF2xD24TBaE7hs5FAZbsXvob4TeCACG5SfFWhtt8xet3GeayzbS",
  "key23": "5dzDZ9voqoBecGU91b8x6px1GpvBh2QUyegaXpDvM2QJUCaYmVQzoGazXYRNa2ARMkFRd2kwp9bGX8ra91dm3Zrk",
  "key24": "2V82CR9kgchsMpVEAv71J6LPaNNDw3skD7vEQe71SU3pWHUh1QbgR5c1G1LqL1YrmuxWRFsu34NzaRhzpMs56BVF",
  "key25": "4Te3HLFXHKarucCWgFbLaZQC9TmSRZdCgtc4EzuxFTaQNwAM8Z8PtD88S8w8oMbAL8DfFmQkCAA9gCKELzidabzy",
  "key26": "PpGx44JTGx4aDGVwo8s1s4gVusUuKYoZP9KZcu7LZupTmjxMvDb1hgQKNT68AYbYG1tPPtqKh8KWdcKCCky7nM5",
  "key27": "3F6ERuvMb97bvVqvXfHyBjRkDG9nL3Z4UA41RCFsNu2SYmkireeBwJxRv5rbLChwXXg8Kqq9jWPAx9txacC6owCx",
  "key28": "2SjU2TF9ysdZPKdCmg7rkns5ULvAokcuXpjKUMigXC8EJFVy4paMdDf7QtytLD7q6VFdsVyRP2pueZJTNYmW4xZD",
  "key29": "UPi7dxgnynJvdgZ6q6sCafRbKYJox99ZaHgmcgXjG7agSqAvPKpWhgg2pvnPPTVsNsc63VBCbXZJdpbBLUuCGhs",
  "key30": "k7JDsgDnDuHSbTya4QN4CeDeUJzAhukrtmWGaPantqT7ccKfNFcdXPQF59mbtEK3mXs9DGyos7g4RQQtBod1FnQ",
  "key31": "4A7t2tp4MrVM8ynutjawR4WtgtbgZKSGyyeRYk7hFExr9nckRQv9bo8DoBitsBsjTsw1LSXPZvfrQV2fbgbe6woD"
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
