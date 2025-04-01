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
    "49yA4c3h1RpJCFZfreo7y8gmX176jAFY6iyBfi9DuwDn8DVDeCjxV6Ek2oWEfXEiShhvswQXcKW9SWVcKpfamZck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58yya1CKWPsyznG5aRnSPNMw5Zniu2QQ2qyQtgUBK1xhHS5Z3BgfqinfxWGg2ufdBfgYxQUexFfkceRSib4hF9Mz",
  "key1": "5azDdytPabkjEDdzom4Kd123MDfvDFeRjPpjR9GTt9o7gvFNNTzS8mUkAyvS3bdwcT1pCBqqr2LziLp21he7os8T",
  "key2": "2poJJfkWa7KzuzPjYUYZtq95hMtrAj8fPsB5tkazJizzBR5SBtrbriYmCpyAEm1WpmopwSUrVfYyY2SCAua1VVGL",
  "key3": "4prCLzZR7x2fNDw2sbY4NhRBo2gcZKebXqAmi9DWiSxpXSPBxspCCfhRCbkkeuFyHfX7nmetoFeWxaMCLdm7R9Fp",
  "key4": "4F24dejbUSawMn2JhxaYTVFumuiKwJvUBxcZUZYFsABL247MNHA8KnQGE4YQahxkZpurdazAQi2mEwtVAShSoEGS",
  "key5": "215EQ9jmjbU5Nw89nTKEAB5UAbAA3HekveXnwkj1JbEuKVfVYajjKLkJ8ut3BBzNWpkuK1CKyzBpH4WFaXJSx8yy",
  "key6": "5MMUuYK5Yj4HSiDjxnhZR9iWtj8GCufFWqV7ZCi61FWETQF7k6WMDQrEJmvAbg9M8XQMmnPPcjx5jdexeqPg98sV",
  "key7": "2LCQwEzf6fA5bsgrXRtSL4dxSD1aPfVZGJWN8GvC8Gk8QK2GqT3V3pXRTH1ngw4uQR8xkfKLXenaRivhnAaM7DTx",
  "key8": "2Tcm1HFhwgJJBvncqBRfAx7M766wz11aqWAmTQHuewXmcbnmazYSbK7e3RJ7TzGvMZYL8SpajPUo7U5eHGf4wdAH",
  "key9": "fDodBKZg8UxuJTg3LCsCUiDn55kBRbdLEpGoqH2zm8PZbhTzvXLmtEiBFbJtF1uD5bK88LSAVgvhq2FBTrQd1ZK",
  "key10": "592bhTZUrHUKh6sFmb8kw1tuUrWZDCKMjSsQkonSF3neVU2hAWVkTtjhgRG7uNWnGXSLvjG2WrLRCpxRWK8BazR",
  "key11": "5YebSE5hvrsTGexcEAYQFXk7WByhszumrW6PNc6TVLF1QyHrEBgoWtEUCpmG6TkfydDMyx4Gp5s7uS5KNXfbAra2",
  "key12": "XnJgWtsyH6Pw3i9qp64GiiW9Q84odTPVQ1uqT6Kq5ihMR7fFsa9BHQBG6k14s6hmXTurouKp5yc98NDKEChnpiX",
  "key13": "2ENzB9ZUxf6rTpy3W5m41xgXJMfryjLTc2PRZeCfjtn619joAkzDJ86PzBE15JHq1kHWnTCRz4vBrW1kyEaEK7w9",
  "key14": "3YHYH6vm1tvyJwocQdZNs1ZW6SpJLLqGgJr5AMrmX3UDHPwtB28MAhN6y2EjHbV6wHzWHScYd2ovxa3mMtzPM8cs",
  "key15": "42Vr1iMqR6u4qpkBfn8AdCAButyHfXq4NahZJksK8oDdkmpLfJRihrpt3xSGb942fTvDzY7PwM3PWSsgxJRZfUUK",
  "key16": "4awnGGfRoYr9cr6QFgdtgpYEqKYp7inwrkXs8kEb4PideUfE61wzfgtQd5GJ3y3QuFkWfU6uGoeZiJdkSJY3hDub",
  "key17": "4NCwoc57AxDsZ6eu4eeHZjmxoE6bPmM1kMQWArMExueDXzHk58QtFyYbQwF2vtGes3898eho6RdxZGArsRM5PtSm",
  "key18": "5csYNGMPnn8zh4hnLek7dCFshJCUdsuuvXtMgVMS6XuzoYaqTtV6DpmTF3fN14G8HsWfS2kp6bWvoxfT3Ghe6Qj5",
  "key19": "3EFa9TD3LyakimSFpUi42jHocfvWuesAaERzaK9dCcQ7YDxettt17D586KYHHdUMPTd4yiowfQwYP34DFA468STz",
  "key20": "3wXXgaEjFebFWBjT1TUNAQStxL7HsrgnuKtxTXApaDGMewJzWJvQM8mWZqiYRvhBdCq1emevVb8xZY3VtpL5Ft6L",
  "key21": "3g13eeT61XLcWxqFpuUagPyGS9Aor9sbe3VdYL1MZAfekrGAAE8K5BKy9i8HdsGehXZUonf17kJVRwtHerL3DJo",
  "key22": "PqY94kGQ872hvWj9jwueuPhDES21y6iCA8btKX6mcNmBi4tKn9ciiYNHEZAtafRbvKYLFW1uRPNVaTehuEYHEq1",
  "key23": "43KVnVpGvUtYabY8BwNAzAJMe71uQXcK2LNeEjXb9HCP4KHkF47bAqYVyfZB2igXpG6enjdSWAHSSgKZQiigwbFw",
  "key24": "3aFTtYnBdktH1JcxehwxiyZ7GGUyK11qUWUxBpdWL7j97wU5fXGTULN5et5AVCfG8Q7kpjSqZeUz3yyBs327WSQK",
  "key25": "qcNRHBV5j2ZWTruuE9f5cLc2PbNTsreGwrSsU5j1EhnVz5E3UYFme7dKzazzMxhT4ruVu5RR2kGsj9ZqFEpCpS1",
  "key26": "2BSjUsQwfka2xbgaZaRmySs23HsUVwZwM2cqETjyweGiSu5JiJ96YhSAqUEupXPeApUvuAG5D9zAF6ZQHuobjrdM"
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
