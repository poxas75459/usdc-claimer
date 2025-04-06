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
    "127Jw9PfbA7bDMGQUw2wvxDLCW3WFBGAQ2g8UWM9D4JXbgABuT1Hkz5u15Rc63vMBmLzr2FyfXzkNwgKmNKzauhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDFVEm83ydXzpa4NhoAqJfkmTNPnhk2PqG9JKFYXWrFhcsmu8Wc2u8QWM5vGzH5aqQnu3yeVGptHxT74asB9kgu",
  "key1": "cgZNXXs3r4ZYLvjshj9mkcCRJ4AkGspH8xwyvjYwqaqneYhNKJd8KoeJMiBWsHXRKC4pBRREvTCKzikWaGeQP1p",
  "key2": "KUQkeYZPfuBGjozdEqy8xxTAAaxu67xGHF6tdCffLa2h4Cb3981ZUd4PwhZ5sVRNX4qovC5KmPqvG5Z9YGtziyA",
  "key3": "jjXixDW6cMtijrmf5CoMmPXZS5UWiABY7WtKifZgB779ZojyweATTBGCoNAA5nWXfM1x4Pd9zJ7dEFccPNs3hUL",
  "key4": "446QxxKm4F165TQPFCggB1MqNiYnmb4WdUsBD2Q8HK1R3XsjW3PRE9uvSrpKDQHp4mrRb71Rxn2ytpYe56QkPnes",
  "key5": "4h6MSRYtM17vhcBLrRf8CRAMqSLHdDFkmH8UrgzCiijpcLZPEn6ZAYU8vBJYqJFYrjaMfR82dGUCGDxzvasam2i9",
  "key6": "3ANWfKvh7pzyQXmSRZp7WM416PcDaQWKnMrdesbajuNzqTaEUHjWeMsAbrGWZJA7qzL7KDQhiuwS7q3G9qbtxTa7",
  "key7": "35XrNjXzpWS29SnyAXLocLdXwaRsZoVYdwPJsVug1iheL9WXpAfJvnSUbUbsnRHkZtc1jQF9yhK8YhgwpNXSKpzq",
  "key8": "4noJuXn6bye6fyWaGAiuoHGw8Xn5gWpTmXpcuyZvZpTpPJMCzqRjWHyCDpGx6YuxmtJFPqoeRvmUewcg3Je2p1hN",
  "key9": "3F218cxBCbrGXDJJXCmjCTh14SS49Yty61dh4sWCtuc4rC2UYxBY23UQ7EELpz7fPMfugBKxwq3qMSu9H4ggaFC6",
  "key10": "36jEfvEfFbx9n9j4r4qc8dUTxSxqzRs5KaspxRo7Zqnbebk3gNhEHZj6C1XsXB2HzXtH5MtxS4fZakLreyHYNTZ7",
  "key11": "5BGWr9JF73CCXgh5uu2GEnu8uWyteuNBrJVAt7TvHhUDhoN3pNHkEBzCYTT7EYDzofd2xJuwjh3Gzk2fK6pyGh4P",
  "key12": "2YTeeZmZdhgSm3y8xQz9Wc2ogBEwKkiA2qtVpbwZBzqho1cMDtFv2dhn18pNardS3eicFnpbKS63B9bEWazNFoA9",
  "key13": "4NxkxzdddnmPFPNUdaTrpktDiPeW4vvikPLSq2PMTgLrKPWcfsNTiUFBE9KkfDD9DcRrdUgtiYFNxVuDvvj9KCe",
  "key14": "4rSZyWxSxA9NjfhtovqX8zo7KvyAtvjMMDgkhUUAmCzq9E4oBHfdwnTZEzGF7vTM5vr6yvaAsjriHN7PLMem1dWR",
  "key15": "FJPYBEJ8de9ijU3UkccNP9YtH7w7XvrY5XFHpP1DKWNkFB3sVVnBG4geaMUx2PoeLTd7x5YzJrNjEQ3MCDBA3jF",
  "key16": "3vo8WjcvuS2HKwuw2xeVBPoXWa1D9EkCrZFy1S5xLTtur6uzYnD4YQXuUmBmKaZtiYXzREMsEYebNsxEBpLTvpZU",
  "key17": "5hHhYv8z774jHZWMeayD7FNYuvtsrHJCx9BNDRebQkDUmifJ4GnhPWZmcEU6x6TG2f1h84jBFacR6W2aDSgZkfuC",
  "key18": "PdFjnKLgsK4VHb4vAR8RQpSNeZdTJdJtTm5pGb3KBAzTFTnFEbQJx9RWFqXnue62i48U9kU5zZZWCX2FqBpKnA7",
  "key19": "25FgjNS6aCBxz5tCh7YZeznHH8ydYWAnGXWdrxCvckX12FgPknacpdChUrFZmpBhwPTyCYa6LCarBkgWrYubbV9F",
  "key20": "3no4ckGVzFuDRs4VKkhhTWyAH5i4n1ZRVCmEpbgo2fK4YtiXUDuNCukvbE89NFsUxKqMEChkhNb2tnNjdsUFHG1u",
  "key21": "4pq6EMUMDRo98JLq2FcBy2hmCdk3G7vXuBCVJWrFVPpn9Lrktnj4Zw4yW1nK5pEn6enyzEPz1z6izPutfRRg4QJb",
  "key22": "2FCGmpinchfFYQwBkJfHpqKKYjBT39m2UWrkkpv7wkEYcKC9A1kRT3o6Xfo9iknn4aAYGfSJbgxN3cMRZEwsFrmj",
  "key23": "4zswvJnt29q8tcsZuLXx6SmE7EigQyMYf9dFxs39Kqd19Did9uTWTGm7TpZjsVieZgMcfWhbMuL2bpC1fvWHu92",
  "key24": "2TFAkzi67Jo2QCSMx6Uwq4AL9VMMLXUqKAL2DsPiPFDE2MmiRGfJ3TVZfR8g5qiHeJDNMS1ujZ6v75TAep6iJ2Di",
  "key25": "3Lii9d5tYNtb2Awj9aobHZrYLuNt8bv4gHMsQ22tPJyVrJnh3uo1WKPxgmPqSruaPRjQQ46Nufy2o6vNf41KYUrJ",
  "key26": "4MGdG6R2NF73GU64gWirLphgdP4a1zNNczHXzeK6cujtg5NESeYHC8aCAEbbRzqFhwFjr4okHMYVSEbvNgSnwtvW",
  "key27": "427dFZvDS5gGhp4Bikk1aCdzjc8Uzq6MQgCmeJUVcxeaEFd9uEVuWjYpgQaKhktZ2pbwFNRPqdpDyNfvd82YExGN",
  "key28": "4EZHGJyn1bRQGyNhozk3GKKxHrthdXCEKDyVe4VnF3nvJdzVUMKNzcGVUWuMFKTjDsMoEwca3jYe1GxntimjgqbA",
  "key29": "5nGywiW7rSEekzrEaiD3uJNuzidGFwZKgfsFmEpPFMVHtBHvQgBRtwZSvbnc2yPXcgfGuZB2oRZKXLVNjMccEUA7",
  "key30": "3HhzVb3ut9Gw2scULSVncjzkMXgSwPLHHZEFNE458AMpk2cHYRApDcgP8nnbgWKm99yZpEzDp3bc4gb1NcW9Qrg1",
  "key31": "gAoUfy5DXc8BHjj18YPKeFmbzJyMimsd6trS3YfrFEczTPmcTPakdQ3KHMmcMcTnFKU8go5zZqW4TKttwDa6LUW"
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
