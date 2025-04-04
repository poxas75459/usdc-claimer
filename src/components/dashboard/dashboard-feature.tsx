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
    "4ETY2D36VrKZ9FScthLBWApJN5EN9HYqTgjPoLgJfAZNQestWLXrA5SrdF3ikuxyG4jrsXXHcJLGcNC1NHCw6cRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CJzhqfyiYYMC4AZakcZ6gBdvJU757jSUbJTgJxYwzLiocGpZQwnqP5TZidQuSysJNru7MuaD5BJYhz1c617DtK",
  "key1": "41G1XWU4GbopqUykR1rqXkWtaRuiTnMLNvCPxuAi2RJZ5otYBazgRmdEhw1NuTVC2kzfeB6aNdBBNh7JpfoVPpwR",
  "key2": "2c12VoeVP8Pqw9f9rhYgYwucXwbNMMUydEQvW728Dda6843gvw86WTnBbB9hevEh5qhtMrj64m6rpUJH8dF9w8UX",
  "key3": "2t2mntqv1sqC78bBM3HwWzUs9ujV56TYXx1g3tLUXCgvgKEbPbYv9ZDxPDKkDAeE867KwWX6YvFfRXNSs8mZkqD9",
  "key4": "uHYGJr2HcgV6BNKH6uaVygf9HfVaDVJsC1fjmdrvQkeazRq3G8xN4nV8xr2vWerfpfVt1o9ZoouDBAYxMdBL6Kw",
  "key5": "4dSQ3PLWGsYBwbWYjKwZFKiFHPVYpkMvRJsgueEVwuE5kN3EnUxt8epPSpjmb3odZoXiDCwmCZkHkJJLMw1LaXUS",
  "key6": "5MSnarzwevFcu7wf6vamNSGMpa5CJQ9Cp9f6ojmStABT846Sr7beP7My8BgpUBDRfYM2aX6LHYmDz3SeymrvQdg7",
  "key7": "25Bu1oDEi4DXDJdKgdQ9U3bggrUrzYE5JkdmvoHsDNwUYgQFcY388sghe5MEk17SoZcqHab77FecrFzEb49M48gs",
  "key8": "4q7DPBYosU9N1fnwy8mQDXFQffG9qhFsoa2otgsHkfkze9FkqSSdba7uS6otAq6tsB13iZ8Wxta9D81ok7Z53V3W",
  "key9": "4mnHwS8UE7zQ84idmpHxcRoY5UeAYmFrrqsobktrEtBSzX4bXaUCbfhsSwKtHeagyooAxJ6AAGYiqCdd9TKnkdBw",
  "key10": "2Ac4KWPwStnWCpaipRVobhy37XmaCTKaMcpKSgViJXZNveZUM2hsRr1S8we5rGVbiss7P2yFgnRbYaXDyeWPHnbf",
  "key11": "jU5gBD4b9yy5zik5aacJ7bm5tgLkwNVW7UU2SXwfAXKCzXtikniYZ5TLrBR4Fj49bavrtm4pU1iAQVWacDi8Eck",
  "key12": "4rP9NyUSxQYx318amqH34cjr7DQyofHXWRKN8QFdv3zavivLBGih7JqKn5MzEdp9y3Wj5CTj6BC1vQpwWpJ83Dzj",
  "key13": "8rG3i2DVmMScLoFFf38Tm3ou8SBZFJJYWmteJ2wAV2TSAjxpW9D5zJX3XsK1cFXwrCGNC8YyECjPTRphbX4Cmrx",
  "key14": "5fZcqLtrB5xJgAhNKatbVCStoZap14SUEiMVfsugeuRw2KsryKBcwfDDoHNfnNhv6CZHpS5CQRTPSf95GUsn5ime",
  "key15": "2WF9YZDYgdky57vPUztCLC9kXGQkXUMGkjm96C8qyRHQZvEXAMgCooJjcgAL3bnM6WF94CKSQdn9LwLkXiVsyJJU",
  "key16": "5SyJiz3hPnFU78MJ3mTwSBUM8R49VdNyGeGSbCdUM1qfTbkTHsmgASqi8TR3RYsQyVJYW1LAzAUhjX4wwP3MScWp",
  "key17": "4Cv5soEnrEw6znJnWuDhSdiau47EDnANTcqyBZT4WvNLX8swWDZGYuDU3fKmK97888qNWdV86BXsrMSZSogi7hT",
  "key18": "3y8pCRESXtZhU6FsMuteDeVgSaSvCKSvpbJK5DL8n1JX7oBGt1oU2p1KxD94CkMrSrywqUKzYvcbWwYU5oxa4hqx",
  "key19": "3gAw35SnvUHSvYbm77CJzi82xTJJgXg24abVGK8CyoNH5ipozSLMaDa49oTDVfDFTFE2jDVTBGt9mCS8sKHYeyK6",
  "key20": "3G8jcAthNisxc8v2amtgUSreRUtQFpAFGpBBRYgKYmaa3iy6fP9UPppU3XfCMr7kjJV1ko2kHsTCY8jKXnGfvWUL",
  "key21": "2dPvPXi1QqxxaJcV3cLxBTPPgughb4sXhWvpZ3LvFx3zSWi6yG3w2kVvk89ekZurk7znbB7pWnCJn6CWiXbXn7tZ",
  "key22": "4pYqaqUCTcbCrDJU4zdUu5JoK7qgcpnK733WauqQ7N3wEpQdej7simkbuNeHZQ6z8AokKbYoDHMxn3wxtf2pjcXy",
  "key23": "t9G8b7VFdW18ozjmWLrWsHewb1y9eesGQLZXnYGk6QPnWeYQ7rvh6JihQFry9cKuYpU58kUG2wJApmEKSCHC8wM",
  "key24": "2tqZT29pmpyf7m7h2t3qjJ5W4M5y8e365RmcowPirnEehcasEQckiEjJBCwm4U3Xy1yUo7D68ZuxX9KiqjWQty7E",
  "key25": "N7JWMQdEifHZ7WS5Ubfgoqtp1yDWEX9J3jZd6w37WiTq1AcFNh1fmCzQG8n8ETjv2VrgAKUkUDWxgQbMrpHBbTo",
  "key26": "46H2tHw7MRMepsFGHekuW9Ayq9we5ZAy5dTB3EhGVZqsRqJSk53eyikyxjopjigF5CeLWjNGVKhDJYoJ57WwnDPu",
  "key27": "56xGaXiqGabE14kyzNTpVSo9UPcjQs3DDQ8r4WQaiTQSzbp9qL9HkLqZdY8NFwoQvAZDiVLV9c3cuWxeF42SkXge",
  "key28": "3bMuPezoNbuRYLo2NhRZUtJDvP4HfKNYfMVgxkRUgRLJYXCPLeeoqkaJRQbgyTBvGB8PChhCLEcwxmLAmKCXuaZY",
  "key29": "54scL1SB5QMtCJCfVwDe9H67cFDZfGfkB93ubGgKLQxKsxcsWFsHdtqPkYwvVf2M8kUEV3GcN6iXxRhPhKn61hiv",
  "key30": "sESNmwe2PZduo4CrvPNYgP8u86QKm1o5P7UtFVgjvsBixGm8G39DfpfTBBXqQV3MeyvQUTUwZ6cJBbTrob9WTSn",
  "key31": "4oUvfqt8ZFKiAMc6VHGZYtrZeNxAWKsqt78hnYpUVtauXjxqXCLUq95BvCVz2yFfDCqtGL5CL6DyT7FrhBdu2Mxi",
  "key32": "4VTsy39d2UeWRZSR65XU5CXJfDw88J2kep2oH32zMKKun7Rg8W79swtdZzeKx1eYb7vaZqQtms69NoeHEdm69fyg",
  "key33": "4F2TM7cNkGQu7Xcfhy1HuBWCV56wP8mtWFe2E3HoyFZASvCcvC7FnB9PWqcvXFbTescd7fvcsyDmcrQDPPSiPQBB",
  "key34": "5HnV2PBfHcgkJ8oyPPXHyLRW2j91CRe8BN2m6yq6TvkV4hkqpUY3Q9VyD2yWVVLhv23sbpNGzriogdoUMdyu6tyk",
  "key35": "638zAJhL8KrVbnUp93FVrrAd4T47T5PtAEmWbjA2vam1xmCjg2Jh6QT9jcU9GiBGVWNGuNvVE9LfMWLAJGmoD6gq",
  "key36": "HrxzEH3wNx9J1VQhcYyvvY2nefyXA2CMjrqGjpvrDCKECjNuTpi95ahkQXZXi661z9H1j73iJf66tmi4yQfnUpj",
  "key37": "596ERXzEj1B7HLEmyvxbnZfxzxocc5Qh3Bvbc1jVey2QQcby4nKU2dX3aGLSaoatY1QZbvLc7Qc8odXQZMRZ8991",
  "key38": "3889SHfQLF4ZrR86pDeMBbc13pwqDzunZjkPtCfEvKN2TamX2bvjkS5iggUU2tDqia7H9ycX58v73inJ6szCRd5F",
  "key39": "rBGXKPESNDDxiMHFt3gQTXzzfRzwJbokuW7uSoQ9GjZBU5z2kHtJot9grrB6BQaWACdnf9fAGZNDdkA4eNhhtCr",
  "key40": "4YdJxQVtG9VHiaJSQrJAe8za7HM8FjmbtmGBZsXLqiSZ3yTT6Jx2infANnxoQAku835xrETAFoXrjHHTZW439Yti",
  "key41": "4z2Cf7fodL42BJC44tpDT8HfSjDeRgv1djNdN6Urk7w6P7zVhCZGKojwrevENSrHugpdZtnJMgb4yVVnoXC8vFtY",
  "key42": "ovfVLrNFPsAfDobUZSakik2gyQpT3uf8pzFPrWRPnVXwyxQBcXB148MBSr4sAJtWR3mdionfEDpQtVca5syyFiz",
  "key43": "2pKqsa65DPcbhKu9bwgRP9Qz55RgHL4MgAYNktv6Bikxm5J4Su6wMnjLKMWB7vMBT55AiSS86i5g4Mo8JiAvNs4K",
  "key44": "4WYWcPLuPK8tfSCUTUhiLLq4Uv6iEY1xttQMa21Sf5Y7QcCPyb6gdU1cmoPh5kiTAZn3aDbkNaZtDo2bhfqYfmx4",
  "key45": "yKaAzwd3vuJ37nQyxp6MCboCaUU5Nr5arFsA4SqsacBrWnHbK66iPsbeE6SRt5quufwUGfHb7DkE9P1MZx1xdBR"
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
