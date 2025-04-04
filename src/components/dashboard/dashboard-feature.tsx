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
    "5xmMkmK3Qwfvp49WVXdQygBpEKays4i5Nvk4rmtUYaDeLfjCjo6cgS2fH4x8diQy4Ey5X9jA5LQT3NGdCpGJ1vqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQtZZ21XFFkWCN3Sfx72XpTSYxVEFVcNi7qH7WYqvUeB4ERR1s4YQXzWbfjhsbU2L9QttpVDKnC55C7tJNYzj6X",
  "key1": "3r4xEDToPS2AtVZvEpL3uz2UiQWSccstZZbUCFjsQhp6pGRUhiZdGx4giFLXQHZPKHn6pQi91CAx6t9SYUGL8EPt",
  "key2": "4ypcm2UFWK3zMhYHWuNp15TYYzHUy7UongmipQtmHM8Z2bwREzqYsS5nFNstbiAHDGhBYaZ5hm6Q15GaLgGVXApy",
  "key3": "25DWLUhrNGv82ej7xWMaTtkL12oZtsJc7kVaH8gDLGpZ5kWBGpSig925JKnQtG3Tn92h4gL6nkLf2YSWctgKfyFY",
  "key4": "ZTWZ8Eqpryo7AVjybzLYAqiv74YAmstW6vnHTq4uGrGcA7kQTrat4RdvdvZgkXfrAbunwD8RND9vsurUPDH54RW",
  "key5": "2DhTsNYuEh2VJKa5eHAE13cckntGEJgF56PktzxMYU9dBvt2rDTPJsGFNfnviLc2kAVam5RTWSxERFmdPGnc5EnV",
  "key6": "7W2r2XgsWJisGhRjknarwNWy7kTAGqgEXRwZnBnPctpj4QTwRhfHZhRot1gg9zK5jgExHNARP9DC9VFjxbXGUg8",
  "key7": "52cZdtuuTNGmj1QX4a1HCvJgweH1KkD1MLZpc6CyfsSLUMMp1y5GQAcYiDpLFBmgmyfYhQdTNs4HxsijhrqvUjR6",
  "key8": "3kzbfT86wK8VFMh563d8wcHAM98ZW2oH7jcA9aPWtWHjPYJSLBdwnUQgXxUoDYEzZuHY499Kbp8yc7XhefBdpuyk",
  "key9": "28G5ZhGtXyz5fn4GNoj4Rh2eNsek1iqake8R9xm6fRBhfqmYkoodCYAH5tjC57UyDxncMSUwJo4JQEa93MumJ2hk",
  "key10": "FC1bubdjYZA94SBMeisuyGxTDpQETi9u2ek6TGMRLMG26zzynmUYyrgDWf6s8S4GfrTkt2mRo1hT5zRpt6DkCrM",
  "key11": "F3XR2HwKumJaNBaTpE4R7c7XVed8hTUSSs19EWykKtzzJ1NCEJ8ey69n4nRVqqoHibKkKGJM4TLcr6GLrbH9jvH",
  "key12": "2GxHe7fnNyYRckMmH3WxFm6K9H6vjHaTDf2gCZZrr72MHVxqTgVCZCfzHqiRAGvnF2Nukih7VC7PVVte41WxTJY7",
  "key13": "5FXGyrFqFJ2BcnZSzidcXcR7SfpgWsjGqxvAyQdmLoHZ7a8jiANZrN6PHU4A1p41EKXi2TtAHUoMJxHJK2ePFJs1",
  "key14": "66w8tHTBXAz5p9JV6LbMTx1LmQwsZTeJMMburitMZe5eJzVmeJRaotkqJ4vGuceoZXrv6rdXY8EfMhGncvZxj5C4",
  "key15": "5kuLxYZLxGkRzMHB4HTxFxqM9PvDyHdHf8tJ6YFcRbeAiFd2KzAFsPfPPU4AvVxzSVEF3vBVejHv8bX8jZ7ZibMw",
  "key16": "786bSj1eVKiiDKssYBVchpQdijKejZd41r52KmVu96bN5f282zzA5tfsrBHbisPL3f6RGmSs41ASEoFLDEhAyN4",
  "key17": "3n58breq9gexEBpAgAb5oRX2vW7YpbC3qjKPBW75puUoK3jLgZnDp6YFEnL1JdN3GyDLXqQeoV7z1gbzwVnDZtRC",
  "key18": "UzDLVMoSHQuovXbtWMmyErRMNwEsEpvSksgjMswziRNBQZzBUKwJ2nupzLnynz7ceSHK3iVXDbUFGTWMqTmrsYH",
  "key19": "676iDG31jCjAqAMGoYRG9mcyB34aPoXju4hFW7XcBv5jqFa9MKBULPuyrhRnHiQgWWH8nEbPbrFHC964oJenTUfi",
  "key20": "2BvnLnYFnjDBW8cwTMjUCZRfosjwtnwUN5ruaovey52dSVmzTLqboM1cvffgPe9JgKNyeyZHQdkKAJjXpP2motys",
  "key21": "61jYwCkVNKMBbLZuwnsEVB7ZTnrTa6iM7Eo4pjCLzhQogtDmNXtMk5W1HSTyT3vWj4Wqo2TGti1fwUnUPg5FJcBC",
  "key22": "48rTkbaZfV7AJmwm8GCPYcw3oJkv2jHEXYpR67io4Y6pHLcerWyKEqqQA42WhtU8VT1iAbpzEiBGJjpwMWs3pKLv",
  "key23": "3hvG78RDiu1DN8JApY28mVux4fsNEo5o1659gPwUQbNHox7F8vnVV5o9R2XfHeKD1scsF7Zb8phztjJX55FuVdv8",
  "key24": "5gTLw3TCUEgP1wYjXgNC1f5Eq3C143SojKbPDbkzZR9LUKkmbcS6omD9U1Fb2LfteY7kXeaCLb44yUfkVBvreU7K",
  "key25": "5PjjXjJetbeEZfpfWhxvVzfQ1uitPgQmqFwfQHD2DZsXgfYhV9VXdWbfmvHkmJag1Lma7WdVfjTxxkJtw2AKUjxN",
  "key26": "21Pr4ozFqShaxdTDubDz7DVc8WC7eczn5gzJQR6sdFfcUQ6ZMgesfTAV9Ry88BAiD344t4XZXoUQBZ1kvbyCQzif",
  "key27": "3u5ct2YvaLtJLntGX8s8pY1BaNGF4fufa763YwfqVkr1bgYMH5WprvBSyLCvXnCVknwj4Lk1soVFwkBf2Q5MX8oU",
  "key28": "3PW53R5hU8rLaNjQgQ4w8wRWhvDSuGvtToHRAYBxgNNy9vBkVFVJjEcQyaqyLBeXGktnRMGcQAK2FtdyDe59t7Yg",
  "key29": "29nG4XG5b5bqYf6oMdrSJtbo6S6638EJgkiJopaCQwPGcDgPoyYFPkphtinBvVY8wz6wrR9U8nZd9i3ND9eY2SdG",
  "key30": "5FYjnRjpJkjzZ4wLstGfjQdWAiUiDVKNKPUVfy55YwbCKZqktKhVL4R5aHyuxy9AKCAN1RYYUb29ows4a1gk489e",
  "key31": "3YQRDQCbTXR3B4NPoTicDujMpthgHPPkrV3mtzUpFmSk6mHLTsT2DReJbwH68v4ym8xwpUkZ618NnytChhS1MsnP"
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
