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
    "VKtkrzNySCgbaeJVr6ncZvCDpWYHJY9rdkS6ifkwsKPxq7xzWyUztiYHFR1a4di7cBieyn1Ba9nqfrnHBG8idiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2wz77wSYPSTinq1GpJRAXzXdu3CjDnz56mGfJkpDyDPHgTvBtED574xhkLobgXeBqxykvPJY6b6qg71Fpdt2M6",
  "key1": "bu1NpWCtoGzBubnPYfct4z793LdGKCGEL2oZtNqTJC5f2gaQUJN5RxPPgDQSfTU3pEc73Sc8ERG2C5crKd1sp3q",
  "key2": "5tBeYR71zHx7f4rrxoSmfyU9Qdrb9AwF5EPWhqji3PAD8vvQwQxH8zjVvk26fUDttg67EYjPDnwaqrA84PbLj2Yb",
  "key3": "47xciyVbvLSDhzU7KobK1PjgdsR74Sd2PAeipsY65Mzb3uWVi755EuhrcwByxuKkogh5zLkp7ycsBMqX41NJcf2P",
  "key4": "Rjj4oWAKgH6vsFeuG7pdkovhVBGxi2ZpzDXiG4a9gmRakKR7nycvDrBSVk2h4pfmtX5AZ46S1fnvj1vhBKjKGB9",
  "key5": "4jJoV4K5bid3T8xBL56Br4dDyPrh4YfRTPSZzSd1vMfTBRKHAcV9K3DtpHGLmDUyzNdwGh91NXYdRSWJtrEvBJFx",
  "key6": "49q44rfq9DfmS9h5zUJdgmYhKEpfPzstuZZdjaqcEDub5peHuTGJCSDBLn6WC5tcGGCpa9Pzc79uaEaCYsD4ULBd",
  "key7": "2QUfNDyayxaE6cu8vdA4FqoyMybDL5yXe2J5PT19YDEkWVVfd6biCsPnwRrafNf7pxezLbo98i7j8cGwmE4CFizf",
  "key8": "5y174fEPE9sLLKfnTrmVD5UTqnUZsTyZGTAjySKVZX7iMPq8ERykt57ic5vs62ppNCbrFAb3Sydg56Q4Q4YXFC5m",
  "key9": "3QsoFrrncATtZzheRqW4WiSwXrK4JfAcn6pkZLi2hxyt3sbCpVp6igqQjtHUGpuBVbTDjH9fGVuoZRSN5MZRHHn3",
  "key10": "4UUhTscU1KyhZ33HVzMkGLQC51J3dzH8X7ZkJR9CLxuNhUALvNbJUkYVYBxU51uCQregFNxQPgJVGm7E9hbgLSFc",
  "key11": "3Qb4wSsTVFJFf4YVRDyNUQHtB6bEXSWffUrnSq4eYaPK6EAdCUrjpn1kEyAXbRbMa5TsHfQCuz23DvTz1rS23pvX",
  "key12": "4VKgZJTkzKKLQJQhKeNVX3qspW9QFn9FpJhV4baikhBXrZA5KM3qKYxMqHyyEA42mnM4b4mCXYDbTA3i664fS8Fz",
  "key13": "2h8ePr16quczWtnycNcCTXWAsxECh8W3fhxCtw1Wmcr9gYAX6BhKeuCrHr59pWjKyxuUNEzQUdUi5H8bcFkDQLJN",
  "key14": "2tyDvXUBfxhmchyUawoUtmantLEActNh26QVSER1JEFPVeS2EekkcuxmjJPLAWx3mNrqph5BE4RHcGij1SPocsp2",
  "key15": "59hg6JDS5yRm3f8gTm9GPRCcVbnb9unbdXc4jE9iZqqhZJGpVfwfGurWMGwCcg8JtDwyythpkGZMUDBUKWiLQv2B",
  "key16": "5NpuZockk7PcBxe1ntVxze2BDFRQEFwkBE75oNnBaJwx9pKgCbAu98khSEriLrjNmPY69913RyVCUhTd1FsZjyJs",
  "key17": "2AdaG6xfZWQv4ucDot3H36Lq6KuTsktojNijZtqZeRUFXR2PaZ9eHSMUL4Qr1zepjCVkmvX6phgo6Jwttv2CYRje",
  "key18": "2pkswnGfeQSMQ9qiEc33R38nPdxwdMdiWWFW7Js4meM1Z6DbFQVrzrX4Zcp4feWxXG7Aohi99vQVVgkZUxP8UPN8",
  "key19": "2rjUKVf8wi6j4t7e6GwmJLSXCGHxyXjaxmBqEPcaWbxMvf1mkPKGkdeGV9SSczoCf5uETQ6EWHMbAA6heHgFnMtk",
  "key20": "kJujhQnCsBe9X4bK23L48MVarUWdA2GUzkaH6Uo4hJzsQke3vS3LBZF5onj7JWyuB9WRTEDNgJ5m2rnZKA3MVx2",
  "key21": "rwCJ4AGUMzZEq3h69G8N1VEKU63ADGCh5r5YQ7SADuZoZoZLmvUKSavptt97Sufzhty2L5oukHSjKZQhRDAkQNT",
  "key22": "4yo5Mojv3SYdFxFSsav2pgxFJUzpDiqFt2vYJfjj4G93ZrVWXKdow23krZ4gY2dbdgzqsQ2pMFZwiZP6nqGWg1eL",
  "key23": "4WmuwRcEPKfGuGyzJZPGThkiE5JZ5gaAmfTxBAkc2ZNnHcnsMbPAe3Cy1gXb7h6pT9TGfpTVGNg3PqmnkM4oK7CT",
  "key24": "qvZ4csPbSzgz9cRkMKzEVTsvLa5UtjzhjVhgRBEKoFincZquJQPDWGGfWEYUD5cSF3hjSmYDE8jLbrXc5mL9ajP",
  "key25": "666w5o98XWru1J9zJuwHvWNS2nBnbes6veEQY5ARUHAc1TMFNr4NxV5DLfyKRvGe3gUeUAN66Xhyyh3ND6nufR7T",
  "key26": "4LkQyWhefy8TBEjP4UCFwQHxFm8ko5aJ6huzqXmT26JguAqUEx8G49dWXqqApBC6DoFuCx1XTazpJRh6VcsKfUWB",
  "key27": "5sNEdJ4NH2ivAVoJezTJUatt2hq5UyMyHM8CM9DfQJTj14iWkYMcajnyrST5D5BkCKUrVvU5Z7eRXxdyLRNc7LHA",
  "key28": "3LjdsZe17vYSzMdknPBkhAG6dpRPtDNq9g1SvacgztWBC37Vk4aYgmS3wAxrcWxjgZuorT44Sm2jVNFs6saXqKRd",
  "key29": "4edt8YERFDpdaM26Y8HpSdAsBEXpcBdGxaBySaabktR2Tmg5TRCQ3MZCRgjriybwuZBEzLZKwTrL5GtBuxHzBvYH",
  "key30": "53ijgbgFtYuG3vVKaQQveAjwdJ2RHtrMcfcGxcajv3jm23SCscHcPJX1SWNWCAZ9sv93ABazFypWVxYn6ciSvnxz",
  "key31": "4cqgxV32q5EtWwNWKR2eyaqWUU8gzoGyCvRDaMUkTNxCnti28DTWSpif6asEqAbGdDTectbvz9aMc4f4RwwpswE7"
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
