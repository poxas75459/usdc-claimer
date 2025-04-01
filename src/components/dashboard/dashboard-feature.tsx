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
    "3GBoVnkAcy7HXKTdpcRFGD1qtqrAVzMKHtRPEJDGXbJEecfLH71uQC5sQGfY2ACJEw6HwnxB4MiWHwH7KgRuTFrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8NGvr7cF6rySnK8EKCBjkDSUpauySDe7kv4tKi2zw8UPLnRHJCPLknksNeyd2TSkXiJSMYmDnTAqzA9tteBEpF",
  "key1": "5FKo5P2SRQdDszF1K4c2pHHoeRoYdgtdSrNKsKVdYSxWvYkzzeJhW9JLrM3P6tvTiWD9RTyKTUWLSoqDipQpmwYT",
  "key2": "3g3kK4A8T7MidiMFC1RQVbMrfX6ZYTAQnXqtduihavy9aRLQGGoCt7Fv1bGhuL3KFuc48BD1DZiaymop3z7r6JZG",
  "key3": "3N6ZZZWrfaJ57mymy9rULWRHzsiJQDKgwDKYqhsZA7Aoeo5fcuZLWZhCcqVgqBCzphZgRyJWL83WLj7LRxb9of3D",
  "key4": "GrLxtATzVzVecvtYDNexni6CwAJonF1SHXvbYU2ryL3UnXz5yMUPky9VYN3DnTZFWia7oqBfzjVV2NHdLd51Pjq",
  "key5": "2u1Sf9u95U8tjy8N9wju6qvwTa2LRQLuyK3DrctVGbVcvdBKsQE9hPNDGmpPJK3h8wcm77b3PsV1AykkHHJ7KFcE",
  "key6": "25BTBCbMfubAZiTugs6XeW57Rq5cWVZ87CEo3YSAi4zJiNwwsYW3G4YszY2YjQ959fuoRuZsoy9xkgCw64GKdDyq",
  "key7": "2evZcueRZCfZjycrVgh269e9aCZNREq5kKy4hssnYKqsiiubaXA2WdNdV1NQVN6L3YxBAK67eqWfCKYM7Q5GjVei",
  "key8": "3PJozLgj7QaXD32AGi1TsMc44Mfsgn9yMhatwWyNk1FusMWeLKXxFrnfQk7g6CjC5votG6L88ZFnPQF1B2X951nU",
  "key9": "4aCAEF37H16xKCpH7GXP5orhjgL9ZusEgiWWU5WV9r4ojWfhVKnrunC1e4m7KnL5gjqoiSfpXXV7GKu17ahkrnL",
  "key10": "2teiAwiJUAThEBNMsoeLnTLUKx7UH55WWM4FjKxzZLgLZaBdgsAuCUWPs6vGSp1kWx1gYNz6YYZHygnWp9aD36iY",
  "key11": "LmrjNyfcN5wjeLh3dTHfcVx4ur7nX1XLsL86htqsdc1xEjrgV1HWsf1hsU9B2RSKqV1KhUhFdMDU6oAy8pX3e8S",
  "key12": "3tru9NGAx7nPoYigARgMpcc727MNPhuf2QHf1RGTxMfnuGKuFRprbdQDvrmUA58zckYXUN4D2M4EMfNKxhALP1ov",
  "key13": "2CfKDiTDUxDumA5AGxjunMPMR4vNE1cDFeaB3kAoRYcaRGuhCffbq1mhCEn9xyM6YxhNHHvc9WVoHfXtViaRpJp2",
  "key14": "uN7oPpu1DHCv4Mm4tD8SFzntdEeZHcrFcx9N4K96rZYRjn1qhvDkcUmPYcya3AHYHH5MicTBXP46NLcumGsQETq",
  "key15": "5ufUjMirEXxTnYJAjtcMymz7xGa8KNrvK5ZAkweC6sNQJPEzehcVie8LrB9PambnHxheX6ksAbEDJdvfj5d3V2W6",
  "key16": "3iXnxs5bmT7h7LmjcxbZnG9K2AZFmwFvtE7FP1oTTCJSdztnuzCcrScQkbWqqxYTMduNLoPxyHV8FTtvQpGJUnv5",
  "key17": "4xHtiZTzziSGnshhdxL8RoFismcDzzXW4Fk9sqpBG1vNjkibtwDbA6XjLwS95Ccnr39iGz65abQyVc2fuqxLSoV2",
  "key18": "4TBvrzDwVDSgzfe5KgGMwcL8yL9x1fy1SF1mcbwADRbq6wNAEKax7g851ueLEiFFP3jWfN5ei2PYTrx22Ur6Yjo9",
  "key19": "42Wr3Fh238Vq48MWycPXkfFSsysgffMAipMGYVN5T7gu9TNnMtDYtbyKkHjqkS3yjBZuSCd91t4wcmToqEBBGmiD",
  "key20": "2kpoAsu8ogzxJ6jQ6pE9VA5kS1b3eCZpPm2Jsy589tH8g4M74WxZz6kajjaWqoxPpRubshQjgB9LYzk8VWRXLhN5",
  "key21": "22tYMaWEYGtrP3pLeJPGZ94SFiuHakieeWCuPaCeU18Yhqix36AbJeGZeoQm61TWmP28bsvAnVTs8ZCKvxAYb1CV",
  "key22": "26PzYbvYBPD7zH1jgaftmceoHmWZTG6AKzYW7P3F7TnYDjBMJ5qcWqSyN6hwxjNuF51tqpSmRgCUft77s5DwNJPt",
  "key23": "2NsiQPzzUmf1emAEw48UPcdJabE32Hd6DwGMqYg2LbCBh5n7G3uc8Lj1ZQse3sSCcg866FNKE8mqMeduhnuDVpEK",
  "key24": "4saoGzc6G9J4oj6od2cWkDQUgsC9uXyZwopXn4zhdgZUAdMcfdpRttPwLMkB2yDcjSiJxT6mwNG97RHDUGvTm1LN",
  "key25": "5qah1JNC4ujG5QdgXmf81r1LZY1fTcETTe5NMbTgM2zrKqedaBW9dBu5KJc2BmcKcSnnpHtUBJqhokPRy5bGnrVK",
  "key26": "EikKCP5FrF35o7NJUNL9sUDxBDjE5EaE3o8BvmSoyUNfKxKUhwcMgu2vMHu9vQHt3Zin4kMnNiVF5QgFvnJZSYp",
  "key27": "2BYZiYKhPbwSxyjGXvcvxnjmHRsVbeDp7tVpKnLcPUa3AEtdQX5RYko8HrHtB3ucRNbTQPPE4PfmG7SKGysAW39T",
  "key28": "2ZLiGVhtXzLAHyACJ4ZJozsjSszRnGAavwFJCrtmiNF2kVGVZhpZexs1SwYSgVPXi1okBSXdnS4Vz7EWKpxxDGSd",
  "key29": "Fk57LqQEYs2FcUHqctkPNMMYQhWVFcCJ8gND22G5AD4GLxFrtcdZycLzKgnVVuPfYXFiiPadYwQJQtg1dp3iyg9",
  "key30": "2vihtJbhBTT5QRpWPEKst5ytq6NjCtQfdhyhEWAHmkFwWUYAzwucy3inphMzTJ9nnz5tmH3RAysZ4ytEDPVPo1Ka",
  "key31": "4oBugWNirWzxnf4VSuSkrd6dqGq2NeSCPdPbmVzRaBmpfzhVALt4uZPTjYHNiqciav8hMwoHGnEexR8p2pL2gT1m",
  "key32": "2UaVaTmzoppjMEy1YX64sXcySnJeoos5hPVVcZmf1zx3fRLGwaQtZQrpfyj3TnEi6GccSfJiPLUHR8Nr9wcY96E8",
  "key33": "jZ95deB1yCMK4jbNNqAzpz3hyDnaGffdCPS4JQe1vHz4VuE41Nr4KqDZWbTc7Gcu2g3SY69ZDAfHqkcwqMUmFQK",
  "key34": "2fz7RZtc4MS1LJdFuAbQQThWktWcpFeAoCxcwWAUucockYqg85uKo7W5eKCau66abSRaCNcvgvnoCUrj1tAvHaan",
  "key35": "4adFWAMn5xF6kG7nvcqEKq82fxeMzUj7LMj9VhRbANj5zPDm34kwWavZ927a2xEfP9V2G76DDmpAVHL6HTW9Nvyj",
  "key36": "5Rg5u1j4ywdrRx1sgyEvfSPUCHwK2j4J4TANAFgPEvKtHURr35mAWYiRueG1FMvEke564NnAtAZd3q3MhMVM1jkk",
  "key37": "C3imnc5sMGP22AoLBm2tWJQKCEXNpFvNhmqXbDzXG458esHX1HF4B4M39Kmg721zt3ACXwLgwYkbnXZBmfeGXh6"
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
