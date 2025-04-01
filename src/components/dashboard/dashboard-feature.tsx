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
    "5bdTFFSHMXT7ydMyzHd4wfrT5BkQ7Zp5kjSW6u2qzhufvFaWuwqjt9ZiZXkfLE7uLQ1SuBHu54ufe3C9RpMjKrmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPGnuqo8FpDJ5ECQEd4YUHatF94qoxEH4KzuwNU5kBVncnge6GhZ7ov2FxiZDgifdPJ2GMLsLhGrnBqCAYqQijZ",
  "key1": "3rfQgmYtXv6NZHBKNLnoFC2NF3MtRCjTHDGNcmdmwfrmcXhJkB9szAe6QE7JJAzyTwUwfVE3aVL5ofBgKaejyJ7s",
  "key2": "58tbboiLMCZWTmZTmez4VBtg3rPGCcjomGVk9nX2KByDVdZXU4nSjBRHwNTxqCNNPR4dpxQY4e2nzzRs6GBdPbne",
  "key3": "5oX8ZJgTSJrgqiVTAyfSomnzEZvuhAPRCBqYJsJCwzvBRnsAhYAuuYMvLLfWcy9xVFsVJYFE1CENk1Vfs94HUQ9R",
  "key4": "brbBqL67tGoTmq1proS76X8ydGViLa45jNCkpxmSYScRsfnfTA87eKeHKAAYV7fAjdW13inmxjrjUBCeS1oGcCc",
  "key5": "25wyXS9VWyaexc1MLZVmbF1BQfg6D8pHeQgCc8uSmKAWo48FNp1WpDm4zmYPXUbbVoAsjhV8PhjNJpvDGuw2k76r",
  "key6": "2mmpY4JVx5rWNaKSjVvJifu2PsXm1jAvUQbmtxXxpMJoxnwza9PkLFte45i1he8jWGQpzd8qe8YgjozoX7ustygd",
  "key7": "aAX1p3KG1SuUerzaMxBGQ6JzGhXhNZts86yHtUoehPkc9RUJwgbB47ZvBncwpacuaSebjGF6Qii3EQJLbFBY6tT",
  "key8": "3qdy4YQJuksYUZSd6Jh5UKBi6eDYe1KnQ7GdNYJFqWrW5SzqR8otLGpkGLP9uc9HuwAsAxUVhom49v9XDqgKL2AM",
  "key9": "4Varx6uAL6ppD3NWNejiQ5Muj3NE3ZpEyVXs5tVpfcM1uxryx4HGZTukYMeTh62vLSqAYyTBB9uwJgRSRaJdPckB",
  "key10": "5mjRBeHwkahhNj4fSfxSzfzAK6iMX6UnxWFH7Kue38uXb3QMCM4QxRGHPMrJQsmtHv3oXSCVrTebLan4qZqbsZ4X",
  "key11": "3AcNpxehkB4yurb4W55RWHYfbyBQTGUotxKj5HRMmRiLaAUUY3gyQGQouyEPHDyZ8n9kimHVoTKtjGUyBKiUfMrN",
  "key12": "iopCVXPCgsmiwm8Kh2gHu7j4tDkySoMr5yYmcMLVHSF45nP6VFbwR43799forpJvcC3H2L7iwnCZZqCmhxEuDKG",
  "key13": "2rFkz3EsxM1do4GwKzjDfcYaA3FmYPcR3VTwHz3DEtKhGNcraknJzvg7vmj6KqgP6yp1YK56hmq4usQe4zbwC4uz",
  "key14": "4EKufAbwxq5KEz2844fx18JafqJzbn8FVp5nnTBvQdAQvdiqAgQcMjXEdUJgUETs9NeSFYTCyRTb566XAiEtct9k",
  "key15": "3pYvezxBwP3UXbdYFjsKeDbdQN4KzL5q5t2h1Rt7FBLcC5dStkBVWSHtou8HLYku5F8YbiLaonrWXbhyct9w9Jba",
  "key16": "2DPrSa4WMZifM5655pbRG7QiqwDoFpEzFQjnKfAmPipJvXe1TnFV1wrNvuoDBVTsyzLt5robNCC1JndKQ7X8aj9V",
  "key17": "35HNN4afFfCHiVJceDpJq823JpnA8AN7X7vp7PV2cG87FdV98ZfmofPY4b3HFCD1vLB9rcKh66ZdmcCfTddg7YLx",
  "key18": "29F1eWvhycaK2rdwKXuACpHHd7nFTYW2J2K1wjiUXkAm4neYkbMbdrrG7YTncBU6deBAf2F7MNw2m3dbNUQtD4vG",
  "key19": "47PeDTJ69mYdbcfz32gsjFoYHfxK1zxi96Kh6wHvWbcJAko3br8hRKbWaML6JQRMhCYnEqiiQgtYDxKUSyCPwLH3",
  "key20": "5UdfFJvp7dBYp6njaAcUQjB4p4oVajsBHJTHgKBdbNJ3sds3tyxeokoLFcdJ7uwoYRNL2rBjEnxJHKh9FBkivskp",
  "key21": "3wskjHipQzhnRF53hbByWHwsaNhbdkFsVcCxvbmZFX2NUJ9eYW2Bvk8udgk2C5e6yYzZ6NcuqgecSqazk16j3rWj",
  "key22": "5X4CfxuYDho9XoBoKbPxMdpi2mecuKGiTC614mKr1Bu3y5EvVMgHSmYL658huEWixAE3EUixBDqvLqmEtZKqxdbQ",
  "key23": "5fgabmYYsLFT7vCyywfziGkhmt74jPxA6goJDj1773f86Dm9dFhfEF4nDjMk1R93vrFydKSavM3Uexw4e3zp2cL7",
  "key24": "2eBS9neFjZXTQujwvpuTbovc4FpeTHUBVKRnHiXkdzBu1mPpstHyBFoDFH5iPhBvV7JqRKNUzzHtNMQcLdVT9eqh",
  "key25": "fSbze5GZ5KyXedDaWaXQVvc6829fsFVPuo7KK5NxSsoReVkxQB4agwaiDSbvtbz9ztvEvGjtu4AhJr3tVHp117H",
  "key26": "52WRaK96u3ZMu7uBGKU5ZcGceyCM9h7RBwb66tkW3r6tNieq5kjK1NUk1Y5FUYw3oGUfsvj72vjicCvYoaBPK8tc",
  "key27": "3tKX5rGG339PvHLzzBzB4gBGJHSdG9V6NHnYZhGKaK97zk7jWsWk4dDFAHU1aTmMGTTVK5AgoHMZSniCa7PyHu5f",
  "key28": "n1bzmRmttdsKXuLTKnc3kV5sDUgC5zkPShRkjotsqjWPC9Jo3NkA9yX3AWTyyjR42oNyEZRHZaPYsjym2BXxt9D",
  "key29": "4HjrSGDp8dQcsTymupj6YodzyMVaCgizL7qdevJeFR8N5secf9tdmyFWhvehZMkdMwFjMhJWd2sUv81ukNiEfJkN",
  "key30": "4vE2tc8i1qM8aBGJSXSo6PpVr6X619Yvs3DmQA2PCewbKunPhRAzWUBC4Cm1LFjEqrDHH2gC2z1nv68kAxkpvXPi",
  "key31": "ymwLAEtRU8JKUy9BAVt6mCXdGczoZjymqXhi9kFmwJtzsd5rVJKRP5yohgif3steBF2Sg3n7FPjC2rG7kvG43b6",
  "key32": "52ykyG6mS3JKC1DVbKVZVWHDpvZHgW9yuojfQCmavCmMa3M5BdaRxD82AdndUggvbqLHLGQZF79egQoSGEpU97du",
  "key33": "2RTuJoXp6vHMiAVb7bnq8bphZwWL85nR34fioS2T9xzQHaZHKTCmBKzwDhLhKD3NT6FBy3LUhtrbY9FA9FpQCci2",
  "key34": "3kovNu2EK9ynSi44aKjS9eyLja78JXqdpVEXP9XzDtQUrkXTupAM3BTegiJYDH1KmVgQh3EyiQQFiEy4WF48Mc2Q",
  "key35": "yNNTHrRfXZ8LvLmBJaMKdk3T48aCQce7XYKVkivtbEMFTHTNwFCTLg5nMiDTTf4hCKKupM9uXXJkdx3ZPKfzT2v",
  "key36": "5dXWG9GyrCaP41P5jhV5FXw8nHC2p77kssVm3A58L83tqACpb69LNeZWoReQc6i2rqHa9kZQeCsUa5KhKucQU8Zu",
  "key37": "x9vJkLE2b4JzhxPQ8f5Wji32X3NofexTSG7uviXJZNy3CL6ycBmkpPyzS6WDSkhbBbWYUtoxwr6meacP3X97vMh",
  "key38": "5fAERwL3xx33FtbHhjfiSKigoDGqSbVCVXkm3KxadPz5EozriXDn8rkZBB7cdJZa4cEgqcs3gHkSFV1fGRA8aTkX",
  "key39": "2dAdNLFaELkUJjcnV7xG7JYyi13XTH9FofcJwPxkYB5oWco7fxhnWnNJEqGgBrJrm8mBGAtNBRhTVvNuB3wCD8YG",
  "key40": "J3QTWz3dJhkUTqXBm8QdP9xHDjULjaRmTQXwKj2yQNcywbHJk696hmazVkvCridsh1VP4aG2XMCQ2oeoQydVNFN"
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
