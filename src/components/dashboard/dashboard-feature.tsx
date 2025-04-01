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
    "HBjd5pQX3YT269WDEP9CSa7HR3KqnhJgX8AZG3xz2AEkWPRnGn3CRvLde8hHYGZ8YPVrkuuCRM239BFhtrN1Y6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b9mxpgV8Q4ob7SsnMdAnBuNvKj6WkQfWJeNL5ZmZQCTr2eHyzJt1NfWzEZUAiVummKEkJ9bLeFaKqjV3yaWzfE6",
  "key1": "4REp3tnjw8XsCfPj2ey1JgQ5avnoHHqa78pzKbtNCYHXdZjZo2rWBKvVuPYCCfereEitGkyuyaTVx95gC6LmboNM",
  "key2": "65tR5UCY8Uq5vmfLFE4x3ZTUFHxXihmVrR47An4a6SEUWjam3vdZPxDXpLt3vfeZdhrTGpGX3d4E7xYXZHDmLtPy",
  "key3": "3ssR7eXBcgttKyrguo88AcCHa3eiEyqs8evVerDp3uEQiErrb5vMaZPLT5weUsXCu1QgZe2cuZjDybZwULiyZj8e",
  "key4": "49CG2fGBmE6bH5xRxe3P4xwgceK5zgBMU18MUvjP26ztf49XJGWtPQd8KvTcsr4tERprvRmV8g4gvq2BVohUz7qC",
  "key5": "53Rszv1Q2djRAbAFqwgpn43Jg3WiHasDbXiQhmNdZbX5XE1LiiE2x9bggqvuxoEuWkKDSku6rUT1NmTL9wxXdk6b",
  "key6": "5bJwixjhXxkes7WUCcpFpAPc7cQ2wfkgud2u6cWh5uFRC3yUj1yacVDmtkE6T6dWxpCJFAFUL8ak4Gad4FRF2QyZ",
  "key7": "3LtBqLBE5rHbrpy7XTdBCRCTM2ZG6syp9VLjZUfMPo2igZ8Qajp8E1LFFwwBbSMJ2EaGK2tQBUYzQWv2Qnmgy3HR",
  "key8": "5k5ALmqB7uE59ZGwFGPnDygCPA7ZW9enaD8gtUXvW5HfNUWKzW4bZZBGTt7B82kuwsX4SJg4biygF5bHcJGZWZHp",
  "key9": "4xoPqXB8Myyt74t7PKgDBa7ejkj8V2eohb4eVpPwZa64e83nzx6vY727kfd2k1oNRJLtT3Rai9TFPbbqtaTd4vUB",
  "key10": "3jkLum7iRukqcvD9ZkAhvLcn4jEqMSg5F6X1Qh3SJLkdSh87FBWGi4oiVaxH32J57shwtq5GGSE6Qw7HnfwV8Fnj",
  "key11": "22RCthAejcu43wbahEFzV4mcxWfSfnE1BCJPt6vqzANwocSyLq1KkugwXdEquPeLYFahre9QST3cfFakXDpzrEJ2",
  "key12": "2RYGG2svVKXzg4WFgj5rZXBo5fdK1EJac9wTWVRYorcYqNgK4TAoPYtBV45UJqKrpJ5JHUHEaadvfJQucn33bhsy",
  "key13": "uPwYPwskXZiV5uVcSH9ThYYMEkMK65RwfGuRYsf5ojiyHKknYnRzYSCgv3DugQX2DJVBhEEdZf5WaokaiEEp1P7",
  "key14": "3kb96dWP3WW7GgBpNePd2VBMgksXGdBWi51rhxASgaGCAEirwX2mNFC1J5tHPCJsGqMB4kkSN2AdswpTb4AL9xfd",
  "key15": "36btGnqPYy4ZMMdJq3m1BqDnEHnoKFGWND9cSzajxCwvqPxNzUmo24BeyRQt1fnSg5DxXzmwsgg5XViTnfuo6Zk3",
  "key16": "TT4VRZm5FBU7cPkKJci3f2igjEru7i1hMQhgeufbBYXE4gsVdAxdgnBAwT6rCYUhiLim7NdrnZ88sg84Enpdxfp",
  "key17": "pZAiHtQfg5brPLd6V2q4f7GwNExgS2eCLbDkkyyX87ZEAS3Z9Ugs9g67xSeBDB1JzTUAtdncpURENFYR5y6smUv",
  "key18": "5uNBxpb5EJiwwtbFfCwS6YFXM6cbcdaUfrgwUaQ1MCtCRot41WCjjS5CDbCuJZW1q5ekQfW3HoncvETLCJWPMSQb",
  "key19": "46qyS4Gcm9dapLms4t8xJE8wTWDyqEMT8SWJk7cmJ7afPkERNaxb7K5QivtzbzzRmgBJtPLS4hM2Y5cciX39A9iy",
  "key20": "2p9cRTF2cx2Q5kge28eFcc8dtqbBb1THuADRZkGXB63SRUkopQ4NnFg9QeKhrAhSXaymoC64TnsU18Q8wAVES6Do",
  "key21": "5uvHKoHrHLzqzFsqRU27ntCy9cUppybRDyStM9kUbNYXtCeyuFSB8kNdxjdk6jAdzz9nXamh61xNojHkRBrBMTfo",
  "key22": "5axNFX4iRwkQg8bBnD9kMrVn9dK8uzn6XicFtKV1h1dTmiQF1hkmmJzxfH9Vg4MmPjTGo8Qqxoem4rZtMpNXFjAk",
  "key23": "2ZrTMqh4BnSGn9kDBmDAxKQhzKCcC4a3TkLZKFn6XWJT7GBKS8whb4zaHdcXdDCx7PVtTcYJCe39Qw63yjzgBkLk",
  "key24": "49jon1ByxEq93FwxuaAJT7eNgRWw9iiCeubFPyCRqYKry1NVUYL2zrAVisQDdw3toDztDa8VUfPhJAZLvZNF4D2e",
  "key25": "3aXA4NwfJEnm2aeBbLEkXnZ3B7XJy4ed96e34XskzP1vpRY5YHBi92EZ2HkqbAkKUeN4SQ7Zx13vZaAd3YLB8i4D",
  "key26": "2AuXLnphxqNTuoZFjrpuUyqAcJQY3k3Nrm966KGq6Uzu5bpzYoD137MBUW7GRb6wk7rsJn35HJJD5gJ4ZYV2z3BS",
  "key27": "5FY2W5bmBhFqi2DyhWsZEyu1oLQftkb7vgTtVir5fQBU3oS7gcMvYw355bkXBVU9AXsH7UZxStZKdDHETKn8KKv7",
  "key28": "3futey8VCUkh7gCYjTW3r69EbPnDRa3kxH74FWxAaFP6N5z2MrpyC3LR1fdUKBC4vnveANFEQxNEPe1fstxTeRLG",
  "key29": "2du9kbfjSoia5sn1dsuHZ8AuSniirZjPVzpFpoAyA1MTgVUfmMsArSYWGMxy67au8E9eUTywshRQ3foBYfRWMtUB",
  "key30": "5aEjMEkHLxGcagTVYBzPVNVBAhq2jFxeaEpKifEfkDpFanQNfTYv9PcxoShEd2HSEtRArZQ9ubBwxCvWN8orzM6T",
  "key31": "2mo3gCSn9KXaaGcRKLqeUwdSESFS34iAF8QdZTdH1bprUyx1vz5aDcgvwZgsFVSSMbbc7TjK61G6M5YqUrGAHpjC",
  "key32": "3im3YtHQV75tPs5cib6XyDm61BgBgENr1VU2Ppu2gvQMtjDvCkJmTGNRTaKB23woZHFAPUGiq9fKDa7MNuh8gWnr",
  "key33": "5qskojESwgM1vrNA3KjxMnrRHRcvXr7v7edauAH7mBTEL5PnsmYVuiyYk3aLBTvZdA7jnC1UaGCzXCRcJxWNtwko",
  "key34": "D7vpgxoTiWU23EYGudW4hrWXq7UNNBVjwU71iDDSCNGGdXdChGBWK1EUCE2r8dhcMWNdTxaQty4BBbZEGExBi2h",
  "key35": "5eLpMDauhcLtJ1cfhJRfgnrsfqYENiqUWmwqhMeSRp71SyjrwDSXcZUJV29hP3NzEWAdwdWTCZahAV4e6XRRtb5a",
  "key36": "4fQLddSmXooi99xQ2unayj39ZM4XoSjnvdsNyYJ91U9Rdv1JxuskKkv9zKHSZcLe7rpKrkUBFSmb8pV8FwAC2YjY",
  "key37": "3d7Xbrvk8KU9wfiYYu7ZsGdq6hywtv8t5y7qUm9mNHb62fV3jPWRAKN3uV285FdvPFrHVzA2KNP82xgBTMWBUJAv",
  "key38": "2eCJAQciD5VQJxe51rajBTPEvDgHrRBf1b4mVEZ8H99Aejrc2qLRnpPpXkH1H2Jh7MhTD1qxpgwLtzHr91xNW4Li",
  "key39": "6TEqDSUCB5phgEkCE2WKcStR7D4WmVwa5AksmATcN9io3YGhPR73zpH8D62jkBishMRhGGWfhVZ8P2PBSFfZxo2",
  "key40": "5eQBG8L14CZpjXYEHQQfvpSum668rohd2yibxxg7i7wr4kVcNAZx62bemgk8HHt3LsGrujEkU75yqCFvoBUanRbd",
  "key41": "sQbK36MZRhXZj44ZL5fX2QDS7EofeDD2WpzW5QYpoP1JrSSdjXKwcjdJxc11wnrLVKdhi8x86tjHNcpAHduf3Bx",
  "key42": "2tvjjTM5b1mkCCQvruxDD9DtuNwDwstyKfBP1jE1iXpLAys9iQyxSLM5sbGT5fHB8YESa5Uh4BNXp4iLY45sKHTc",
  "key43": "2Y86pNGbZHXvd1ZwHyktgSpZvE5QY3fLhdyWC7zhEBCxGkec2R83Uc3rs63Apggo1biQPi7dF47NpK4Tyjkp9qwy",
  "key44": "5i2gGkPtR8rihUHenu2FDAmZ8DpJuceQnEPN5PJVcpUpFbLoj4fMHYtYS1aPqYSag1uLrf8KmvPGWuzZbRGkL5h7"
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
