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
    "2ztoPz3W9kt5TrwMhmtYBcsvbnGRdCqnL4HFs3R4MVpkZLz2WsJpnLCBvuxnHS1HM8BXuxRdmPyQX6BnVeT5TibH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z97jpTy8W38jptr1JjCdtNisBcfBDanJPQYiBDfdQie4PeiFAMcth77bk1wF9uh6EMHyj3Fgz17L4PtRFGjxTed",
  "key1": "5R4nodmiqdRXvkzDm8JHxSZVcjCSdqtRCyUByxegV6MDpX7oyfv4f9P9Y7nqMFo1XApJK49xS8dJ6e5dD4f3g79t",
  "key2": "B7e9UECfxtGC2Wa2K6yX4jhLPKZdyyFeXyKQ9pwfxiBdNH4iXAfFA551nmBjz2AabYAwzJSWRUYhpHfifpKrWpX",
  "key3": "4vJ6aVpH6iEN3vVdn3bqBVpii3eztffrbDiMpShNPgD3SUn3VC5LJcXWEPyM6VBnnxzFsSXKESziokQv67RTmUYx",
  "key4": "2XiBGTCfhCRx316HPsCNofMFLpJiN9qGxLizRdtwBrxJYvBkhdHeETYqvLSH1KKq39wUUFvkKUo2gD59umUKmCWb",
  "key5": "2H9mLtgmhi3UDHNSy8d98eGxECxE4cJ5Mmor4RPBUrXNayZEZytj69raxsx5Lbtzh914eS5Agj2jfmvdFKiUkFfj",
  "key6": "38VkgwyQLF9RKBqhNZxpW26En9LtT9muM1kiLpR4X2m4u9hQeD3XhSU8XzS1xwFFcZ4QDUV84ZWdJybuS3Km5CVT",
  "key7": "2qUMh8or3A55RNjAAy81F3qc3D9cxAzSHRNy3oR3Vvj9hHhUqbBigcoXR4UDxScxsGjmu63FakZ5bVJpWmKFmEqn",
  "key8": "4Qk7MBtk5NG4X62zQrVFa4ZFEhiuUJmxUj2uQeGuzivCNfzcmTMhkGRZZW4cbpeJwWwJX6Wx41meNZLYmrqdGeD6",
  "key9": "657gnKZubrMxFtfGY8yZvGXKByKTZ9mUxJVsjsTfjAqohq7e5EsyEtXR1Xw86KbK68h1VGQi6Bcs6Vi2VudA2mPT",
  "key10": "5Y1PHVeSU24Znbk7vAyvxf5QBTauPXgDRcdGaBiSt62SPhrbQJYRUCUhEE2GxR5rMuEY4jvstTnsWzPGxGTt1PkV",
  "key11": "2FavvQHMLi4ExZ3xzLzxyTdwN9NpDzBumfxojaZ5PrwjHndPFcCvcd8UFdixM2a1CSaigt5zvMDBs7TTwXKpVWta",
  "key12": "5fofRACskUDgjcxLxabHCgYx3wtBVhSHH8x3yS629PStrYkRwao8pKufCsrntd4e7m4bfe68js3otCdwhnWmje1F",
  "key13": "3ordvfzdWENJW4uaLDwyCEndXGh4hf2LSekTMguHXMVZ9cEq8APmurZwKih3aG8gttuhgU1dkPc3kbDCuU8Quqv",
  "key14": "57w19CiQc4KUC5Qr7u1FTn5J9ymAfdeMpY2ScYsZX32QeNR7xeiL6tWnbj15AxVzZCza2TUvVSxLrmuve6gSyrZ7",
  "key15": "5u1ZZthVKEFonUTESpB1PJg31tzgSepB34RsDFLahDCYhFKMoiZBtjTt3SVKUE8cHNY6zfSaVHUyZqKL4KaLyyCT",
  "key16": "5ntRMhQVhbxBE1UmKS3n4eY32C1squQn9FCbQ7gL4s5nHMeVyZsCgyJHSnsyJTYQgZnhw4pskaVVU9yN6aNupcVn",
  "key17": "3E99mNBTLoUFkFvu1zw7aPcHStTxC634Kp2m3HmFVM9eYHxDGs1yFrtL1cqJoqgSX1fKGd28vhdthXdrqNmm1bmZ",
  "key18": "2FavREk6Kc85xCa2CHqbMd1ranxhjYZDhkHk1gyqfAuyupnL5dAfW6ibAV6rGYq26ZBo3X6vt4fbuQV4ttGvEDDc",
  "key19": "2PNrjjaUW5p6Z1iLkxQSG7M8U5NeyXCzxoo3UtYbLdZyrHvCWCuWdU6UfRPVbdN3TCBYu2tJcjAQDxfV1CEs6DK7",
  "key20": "5tus484v9WtP3PkHSc8PfvEDkTGSRwF7pT7VAM9CJGcACL7xMur8p3QqwpDfxUVrmTJTaHgYP2Boxiqs7ZfKCGmw",
  "key21": "2pmj7SpnKQiBaAvpfnQiXdHAEusTHn7rvwpuAk2LHoMGWEJmG8Ba6Th7eqjwmuoGzcn6C2kSS9VA6TTqtoUx7TEV",
  "key22": "4W7K1QzQZZp7WY1BPUrpjZcmD4Q1eunBrG5yGyH6R8w12myWvjpfgbGmpBam74g9LYojdqqZkGkvVwgL93vvynEs",
  "key23": "2Cc2wmHMKrEyyu4BFKuk2PXjj7QuxkqBSztggCEWhZfWytdyLU9JKLLhYpiRpMLg2QwDSB347VwC3iQ5AX656YXZ",
  "key24": "21orzFfFqcN5zEceNJoSyd25ejbqeQqNUTUQPd1pbjxxQAVawdLHZuHbfTbfMYqMaKHLjJjqgEDFrAKJgL4sVatS",
  "key25": "GXRrFWa2phhko8WVRpA8c1dnV43dadgy7UUvq66htn2iorCvf1qShL64kEL6LLqtfR6qUwDWpE1pxUFXXvZ5Tse",
  "key26": "44CX3pwgqwBX6QetiairNgaZbLQZkDHg5e5Q4wToCjiVRcLuBdTwtW73Ea7ZUt3Cj9ZYBgsMELQzqv8A4Dh7ubC5",
  "key27": "3EpXSK4LLRRQs4vpkuppJtmPtj1aabLGdHN2taNuyuLD5oW8cuEwbS9uQ1rpHV9a8DreRWrmn4dEN2EvfQxTC7AK",
  "key28": "5KyhHBafVKN5q7Toa6WFdiVgP2dzM6jn7iXTAejRpKJk4tXbryXNmQK7bwCysi4kXTmuhwAniiYhgDrbQ8vofisM",
  "key29": "3PtAfx1CZ1ao4hGAVi7kCF6yHTNjYBT8JBzYu1UBQjuNXAXV5fGCTcoU6WU5XFz5V5UJWYAtLYr55mTF5JqNA3xg",
  "key30": "2AZSDCA6kYeuMnroaV15ZxoQvnyge7cf2MNciLebLsEcHgi8oeu4D8hEDHu21CqAvF4u1qUX7Z3ajV5vxUadasyW",
  "key31": "dxBffSPUqcgL4B1vE9HEHQm7M5HEqQ3nTtvqizAcaPsE3ucydq4hapjuzn4jwzviLMfzb5Drb7sTq8b57WBNwHt"
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
