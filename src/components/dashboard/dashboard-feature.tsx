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
    "5ehrf3a1ueKD3RiVmjRRWQxWJnrXEVaAN6gMm6AhFwkYd3im48tH3rhqgzBiw1z78LAJrN8xRN2McUv9YFv2F6NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XyK899MrUuxSjZu1bR1skWjrUBkuHuiNgUoLgSg5wZyaw7iatWWBdeDZRv5pWcpyGBKxmCAhFhvpKZNQbek2DP",
  "key1": "5ZRPLs9u7Ztab5LXgLSF9RkzieCm8jAy3akWv2DhjxXPQ4jszqfQMqnMvrxSCfR2YhfcTNEruxMEWDSp7vedJ3SR",
  "key2": "4nao8daun2CHVeF14dbDDzMtpsik9udB4hdHcjHHa1W776nyab97LayAhm3LwgPsRpvcKXPyza4wJ4xjzXq2HFsD",
  "key3": "jPxZKEstybcWxH6ZYXWKQCoqUfpqzgnsV2N46pXjbhAASA7MM3WAD8AdPrXKiGXUZ8xriwEFtsFjCncx681pFVR",
  "key4": "4yCZg4e5D39W2wFbJyHQ4QeTsJZk63s5DYHg2kjP9qqmBXs1Y6uPnGXTKwAvMPm7VvA4wJYvGi2kkh12zran17Eb",
  "key5": "4smak8Gexvw223V1GKLqdPNmqPdoKMVxqYyyp1P1gEDqaVPDhHpJQNRvAB3QEumpKzpj6GzXhD3mBugeD8uMVHeF",
  "key6": "52PqPdHsoraEY2Y3DqQgeCUWGX5jaTxNMG4CSJW5gZ4mVmT6NjpNEAhgygPjCSRPSiYbLhSRoELurBwMUch1c2PM",
  "key7": "eo75Kskeb13TVGzBrWtPyPbvAiHMUHUAMnEFUfsmLNh8CqchCgQDgjm6MCmvQQpjcMm4j754XbRVmd9Kkif4213",
  "key8": "55B5f9A3NsEJ4pt2NhcZAxAENhKnhDY5PNR38ochT6mThLUyspuqv3r9r2CdpWFpxBfgE1LDXTcRRnpZxXrVBHUx",
  "key9": "cCc67psUpdSUBLkWskvf7bfLrB48UjEkwAxi9XiNcbzJh7zVpugz5fRByGcKRxTrmtUsx1YGBKoVfn1nEetyMNC",
  "key10": "2P7pedT1tPdSpfoeZFH8Wq2TzAFmHt6WZaLMApo37Z2fMcyjcaEjJZXHvPMXtixyMKYh7JYXSkS8W6Wzy9m4WwJs",
  "key11": "67qw2nwJxHU3SCPwc4BAR9MBW5DCtdciCn5c3MsyKPeu79SiM4rvhuc7omz98TtFpGp14WHLwqggtAQHC4qY6GrP",
  "key12": "3um6ca1fc7qPMgFsLukd2GRSmnXT18JoeFLT6a4QRwHVU2iocozh6wc5mhE7AFPS5Gf8DmguRuDqCqCEcWRQnTwf",
  "key13": "4fmYnJ8HNb1GFFKJ9RZEc3aYDeW14FwL8T7Nj6V3ahENVchJkSq8kDRPgD2SL5f68FBH8efkWmBrbgkcEEz1GH4M",
  "key14": "56djgSnarzQkkCRVkWGS7PPzVV5f2UAjbdmjsK3kcwuwSsc7g35XaKdo2VgbbgkxQBBUKZPRS43r1ovwd4WGhGXd",
  "key15": "2fopTHMUMNgGh2oCmD7WfTCRiNNkEJtDyUFrCMJGPzi2KR5FAkPLBhunXYBxtuHRjxDxXH1iBQVypzkqQqTfjSfF",
  "key16": "3y7B2zyVYXWcRMRv9zdj8AGbdKfrLBMojTAdgo3TxxeHJgskdstcFC9hFaL47pyBmcySWPTBphQovAMb2PcUtCbx",
  "key17": "2ZXhLsTjDvRkXguZRCXyDEA2HCNqirZVDTz6grSCF47VzGudNwj9nKYKxT4WtqM2izm91fGe7J3B1kP5v2UX9uLi",
  "key18": "5Cg43vocp4DkVd5mRE7bdHa757aRLfif4CMd7pU8XLdnQDTCyPaxNMMdkztD7NVEFVc9oU3miKUob95SB2jhdV5j",
  "key19": "4BeWCWXo5ZzhRsqSvHgGEwUhkpwm1tRkNC8EVpYwGvcbyjEkJ1AivHmE3bJa3rVgVu9hE1Lez4hawoPYMEgzasXN",
  "key20": "4GLbv8Dst9wrMaWs9utGP1j3UoYM9Ke6h7HXd4e6jx5LVH3Vtch7MErCCcRYzBtycgm15ZyaJiE9xEwcqHS7yuHR",
  "key21": "4F9gZqmdekz49nNFDVwHXNTXFgYN1HseCUPz17DX6ByjjDHyFFaa8FwNr4om9gvCMf2FYkoU3uXBFzZJ2icjNeuu",
  "key22": "tsAbss8tEuttwaYKukC9xTT95cXSbaGabiMBccSyReeR9Yvy8FbDcsnmfF1SotPGTvHCnVeUHxSgPviJ5RdQizB",
  "key23": "8Mgb7cRwSKa3JHvvm7ShMDw49Uqh879roDWSk7e5JzPn5gPz9wUw43asDrBSS1nWrvuRfhUvbDAKGZ2UQ2yyFqk",
  "key24": "59Q86T9TqKL1eb6aTrTo1qX9Wma9pC2VhsQeHsWrHff4HnTuyjzAazLtCFMdtEKXmXf5L5nzKUFDaDR4jZYAaJ69",
  "key25": "2tfdQgbeoc25hq1wH3Gt7UadEMUoU2P4SipBVVHmjdmqd6KyFPu9AJTdArvRGUh5EAEiCZe5T9m4zwmGWNXtGYzJ",
  "key26": "ENZkdByiS4sy53TfTH2LJdnCgMabZtx3CT868Kz3k6zJAxvUbDdvW7Pmh6aunXvUgCp2oFk4gWTuvrvbMn5zQpw",
  "key27": "4WTKLUydjGcoYJaTvz2MzfyGBZtrix7pDxd9K1gkY1S1aTmanDv6Mv7P1HDqewUmsgfVkm2d8Dg3zYNJKtkCpQog",
  "key28": "5z5QspZStXMChz5F7q9rZwgLuXkXYpeuKAG8b6pri7zp2m3r3Tp83J2gBShs79BjejFEVZRRcnHX335M9Cn5BxiU",
  "key29": "2XCQHy2yKKokTY3RPDMzBxUZqAUbvyYvAcrJM9MuHGV6t9Sr8H9XnzvN5mcc6jwLgCdgrDrbp1ak1mpw3QvSEWwb",
  "key30": "4pwPVRTf8nRUnSPVeCvHoKUSQTA4mu3BxFprxAv4HY8meqyFt4er9Zvb9Sq43SDGk2NgK2gSPEqkXV5Tbag3svrQ"
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
