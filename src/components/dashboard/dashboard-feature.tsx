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
    "2W6NkGCtmRfJZVrGa8cmCYH65VjNiC5BXpV62CsCnV7ERwLDHsV6zzZdgLqSsrDbBSstH6S5GJowpuw4nG6yoZpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uK3LUAQLPXJvvg7Gt3z6Fs7b6pJxqiEzFPuL9oQYY3skh1rZ8jC1FmURaUbpbReA7FHvgiqfYAxEGPzyKFLAQyk",
  "key1": "2sXoENupVY8fFCYpNtsdcUizqcweKx9jUJHBNqUpfT8odoPu7VUGDuNEXpCvmxwyTfPeJHmTd9yYUBjHddskGRRe",
  "key2": "3xGhgpViNscXSMkAiwt2gEaM6QgTLoYZegy9p8d95EJJ2Kj8GQynZZRK63WtZpe5SzTzRHnxvDHhsTJbcGGYqyYM",
  "key3": "56NSiC3tVXBpGsZMzrFn6MFTtdm8mQM9NbUzQgWaumRgn843eTL5MwXKpcvLMj2vPhy6fu3Yk8EQsmp1SVa6rH54",
  "key4": "mW1njSRiPRj7iZd4x8qVxQj6xb7vss7vk3cCUNTNbT5jAT5RdFoVGUyTGvSD5fsrUthu6NptnEQ3UsVRZhrB3WJ",
  "key5": "5aWVs1Wbe4UzJZJY7hfnpws9ZzRkqR1a7VSGo4oMGuwBFCCvF3bRkYmSif1KxqvnhmKbhjT1P1ruwYDZPabSpDd3",
  "key6": "3Jj7VMXJQ4snb8RVbQSwjpbmVRiRDZXbTTYdg3WRspyw2PModnSyEb8FgHC8Fjarj3jvTcaX9c85RDpMPed33Wqi",
  "key7": "4RCtZaoSwh3XzjBM1wQY8xw33cAGvoMGx6rSvSe5cv3LpDoWBcGKzSSCR8EGrnABzb8hb92ZVKwczxHuqFimFuAF",
  "key8": "4nZTmMA7feqvt8XEo1yHNP7wrRZRivMoEnyECqRRLaB6xw4VRHuYkbhMKLEDhyUUmcnX5pJ5UFyrEoEeveCFqbhc",
  "key9": "5jvzVKTpHPc4C2AzTytDLQCmMKp5LNvuZmwAd1s8dpz5Y2WALSms81XD58mrpTzaDjAk1iPdQCc7c3HgsHQkYUfb",
  "key10": "3FNs9vSpiRrhN1kVhM8dJUXDQDqKdVFBY854PxGZc8YJkvELefRXvDxC727VmF5gSbWsASN8GfCM3CJ6kWyh7hTU",
  "key11": "5pRYtFJphYGsBf4WG5a6xzC4G7Bvpj6XvfX1hZvdkaznR2samYhAAujNED6Q4Zo7JYDScnqD8uq8KjrEyExY2Hgc",
  "key12": "4jCXXBKrCpP3EkeBzjRdUrhs3tGVH26rTeHhMP8x4dR8FDvpuunMsw1v53A3aU5iU5toCBSjxmU154GwaKp1qSRo",
  "key13": "VRZLSgYi1UcYDX12esh5LK2fL3BwVhR6NSMbctN9qancTxAkqp9LribD8WBk9pcCbiadmZTzsJua6Hx8ozNVLVa",
  "key14": "3WCSUtPZP3m5PGbK35icxX7K3VWRL6CMRbmngko8BMsvf9Wq4inLyLgKfRzPjeKLJZKVg4D9rpC9VQayX7Mg1Rw8",
  "key15": "49Ex8kmaL6zPHL6o3cjyzxfMxFpQdxtC52QTmhAR23Zo5ov5fJafDvPkvMu818j5HjTHHyELxwFH6PErVLh4PXiL",
  "key16": "558wPx8EWnK5yVFVFVnFDeobygzRTNF44q7bvDrjUaFjsdTA5ZXEmybMsxvFmPhLn4vTvgAiER39kcvu6g2GckpM",
  "key17": "2VvcxayqAHZeJ1b4qt5PR5dA494D4X5vFF4K37tmL4XDthtocono5nYPnxLFjz5jnCf1zBGf4QYzQL7dE3vcaNgP",
  "key18": "wWE8PD6mykhHMGNcBix8FQGEX8TSCt1eBtxjsQYf6AfMSNPXCQVWYPoEhAkquZT9Qd2xFLx4TGC7D3ZHoW4tV8S",
  "key19": "52AYYgYhj4CPbfCwX5ouLyME2DJL69bKNhC5wUV8hpSBDTdKRYV5G3fo1VJxCgJ3qYCRSPtbkUFAKwVhzmPfy5YR",
  "key20": "39LJWYk1kc4uf76CvJKncSfz3wrVYQbbMm3gQ1kH1Pwu3rZa1LqgsYqcNSaSDGBKBaJc45EW67hAXK9DuT5c3XJJ",
  "key21": "3iAnvPP43sviJgq86K7FvvQpCe5rfimD7oSoTPEPM1j4FnKEYzz2iWnWun4kfnbKN2BjFp2bX8RHtBpmebZDqitF",
  "key22": "58iGdWA6uJ7AQz1FCqrQeP5RyGmJ4RPDQisGsfyJW4WU7p2VBY3Nnf3CAj3k8C3suB3htzKR1fMrzaMQURQeELFA",
  "key23": "2dEVPU7neRCgqajwczCHrbaAcLbZZP4d8YChqiZXTfVE43nB7pi4yS651NCx4SW1y8wxZmTz1gYvYZpWFqyzvYbG",
  "key24": "4Tg9JfEAZBDd7BRbHT5kPb83cUdD2UuheujNrSzVgcStaBJu8kST2EjbwjqeAmdvzkHawJ8Lj2K5cpLHxRgvoACM",
  "key25": "31M8f9r5u82dh6mksTbt6g2jstBMpjMYwJHWMTyCsxiXK1pjAc3jPSwse7rx4nMhfxax9VsHpKoRQWs6xgwNvHhr",
  "key26": "4EQLWDi15yYxXhbiiGM3fwBbNRQuYrEf8bVDufJPBbL39f6McsQxJcAapPngrXHLG1jBkxFxdSyuRiwprEHLZiau",
  "key27": "5qjvvN6T8EuvAwzWuA1BM1HjURYam35j6C59eVjsn3q5tPoiSDeWFSWiT6YaNDV6oWgeHVYUa59XP9ugJ22K6X3y",
  "key28": "5LN6nC7Ke3KCW7wXSZG16RjfvLTHguD2SizRtLJZ4VBULVmrKjfTDgwg9Qs9hNbwpQJ2ZqmWtqW6fHb5bW1si26E",
  "key29": "27WzVismvaqiHkvh5dTVZgt91Ep88cT7ihLBRGS6H66jj4VRQ4iU1AF74pvqQGE66uNw3441AB4KMvjjA1Csi4Xx",
  "key30": "CFHW4Lfu8r2JpqU5PrseFPHNwGiHL14P7tshwe52ndrbe7vMJxPBL3C7f62yCpVLUUnsj641jbr3CieLRYJWhHs",
  "key31": "67jrEvQX85HLe5Macdi6mRWGkVG6R8yGvNmgkJMBkYgeaXyXjVWfXkLwM9Xx2HNfruPBHbmDdVhASd4BYbN1HTHN",
  "key32": "5CSQxKx9y9noCV5dZbYCfF2Xzc9QyYr3hGJEkzBQ1fyKEss6vUijbmKM4j5J28Ha5qw7JnjrN2yaZh3DKXyc1AtM",
  "key33": "2YJfYzhPiCbFqSshNRRAPu2uyRemEMXkmSXWW1oFkSnkMFQNtxPULsaQjRcAW5kEDEsv7AUNKncoEecRgUwbLdkf",
  "key34": "4oHHrFdwBWRvr7NMtQeb7hpbPsgEoR8vFzEfrZ2ikQhhdVhLSi4bVqWeXnKHV1eigffG4op7EevrknRtxpnXkEg8",
  "key35": "2MCMST5GV9rMkwsZbbTrZkGzyqr4Cpi5pH9bnLUeSD1Teuo6VRiBS9otTD36SvJPKXTazTTHQ2EmPjTHJAeNaL8w",
  "key36": "49pnXsXjokE41JrVdbuyqA9AozBoePPtnwj3id1uwhqvBRntDAzzkP9aRjkJytqTBQ2YxusXodv8vfeNgZUA1HUa",
  "key37": "oTHYG6SoGxgmSX2JLjkxz8guidxhsrST3tEJM9ZjzfFA46pHDqVk9qRmz38e3gN7ctNwmmdXy53PtuAmjGDFVW4",
  "key38": "48UoTzYr55BVirmCbxUHKaaxVJP1MkTU7Tujg2DxrriX7uH8cyL49qwuGJX1L8hbhD2JuxiEvUgCQ7uRH8g13ZyW",
  "key39": "37d2FfMuoBBcbwm2unb8FBEzJ7sjdUvZpWuQ4bMyjhYhyUiTsPsX72d2LxoFb7RjLU1yQqs8oHUVb2qofhfcP7Lh",
  "key40": "5MxpT2vv7GiySQQqq39wRvw9vRR8zGgarqA46FQ6WSGXWMiaSQcwvu2pQtFA6V2pjpdXq8aDe6WLsnLv3HTcyaWY",
  "key41": "4ReornPYbJZxhdfzFXiNNp48U59MznPEhu3cYBZ3tyLHVWfc7JZobmW7cA6PfXqki2BaxrtcaG7y9KY3P1WtBQ25",
  "key42": "2WXi5cDtPqkTyCiir4oVtY6PaUNNLvp1qzuxMGSiqHNyuKjGbSQ1Cm6idEsQ4SALzDULG5rTqah9EzjNYjxF6EDL",
  "key43": "5q3txMPAnNGcr4EgzSkbw9o3iM1N1PLnMgDR2qrpAjLDtz7Qt2Mtw3wBx3G9zNYzGxQzJsckH8nVSJJS4Txoop91",
  "key44": "CeyBRjxtm47q2yqQ2UJ5KXndxsWyDFthbfW4SyPi1uFJv86xoCX88XsVCFLJTD3QPcaWUtFjrsAezUeqWYmEPeA"
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
