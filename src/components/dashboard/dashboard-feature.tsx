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
    "8LfwAMvLYQDCmQ8a2dkgHiYLowEiFG47VQ5azKupXL9iM5fM8nzXT83NwLBRR9QmXteJX2Nn5HXzmwf7L6PJrWe"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "XdCCtMQw5675WhubTxvFDuZDgggXVCN8Poo7V5LPthTeycM1FmxykiaVSiLSjFnxwk962X9ZjFzrgv9ufctVfdG",
  "decoyKey1": "4DTBhpAA6cw8VTpiZNmYr6qkHsQgXKR8RXQerz1rJ2KynvApuUyQT5MrhUC1A6srvDmf2UJSPoFs98tndKVw7iS1",
  "decoyKey2": "45NyeiZAhat8w8XJR43DhsA2JLGsEd5ooPCh6PsLWuXUMb7ihPWws5zsYLSrbXmNE2TgvTeCD8kYSVSQW8bishPY",
  "decoyKey3": "63XztzFgCkZYQjw3Gwe35sMhfP94bQ3QkctZtMRi8poJCstaSAwVTGLVEGzAYVG6UKVyLKNaVSQWetLkiomt6XKF",
  "decoyKey4": "37iNCe7ASMYTSJHg3apy5yXmrpbVELMje1chZ13eoM2LK6g6mUiaSDYjpXixnobctjAM4pXpBvfzRT9QFBPihYyQ",
  "decoyKey5": "3XR9j5rVUDz3FociKQZJsLPZZTyqTsdaWCsir8FMY9kiCiXHmpMgrRGLiVBMDWGY34wyaS8no3BjmpWfR8oYzYvV",
  "decoyKey6": "4MmARsT2tueeFKiz2nUHUSJnaYnQigV8u3RwkvX6i3dFDTZT1JQkHwq57hePe8rVqb57Mzb6sb4t5Qjcij7BRtg8",
  "decoyKey7": "49RTCaQA1TdsiuyB8GGBaHNzvacpsxv77eqRm46EwuJEXyCpmcBckENADqBJ8BEyq9S8oCB7j2DFpivXTc9SWUbH",
  "decoyKey8": "H2vyJs9b6QiA5sBnNDX3sjYaBHysSqvuZEdod85Ny85W6h3qo18r2MYZtGyW9HyvSa7Rv7gN2uCvUhYjohbVDt7",
  "decoyKey9": "26yV2jfMNWr4R1VPhESwoxVoCZsQyt8Nu6NnhsYPs9XgffNqvAVgmmpaQiXVY1sD47UQAkdsuajzTh1JYQhiK6Ei",
  "decoyKey10": "2Xq2SUimPcK4DQVeHTRVRB1CRMA8rSWLX6XfPH5KCNP3jYNasWLBxd2Dtn98d1bLxEQkxtVVgMi8kmdCnTFMgCZG",
  "decoyKey11": "3AiLYjDKMHfBbftzXuzYGxBdRD1TaJ6zbcynAbpbr14kYwEDWsCgVz4xAjJKh2gRPe3mRzCyF2cFT4Y1dWmix7Zz",
  "decoyKey12": "2ekVVDw8QbxUTqQTxFebDrBZqq3Ky4YroWJukNmBh7YmQ5fpDgJKdnkCahbLoGFvtPHbgKvPRJTY3TAsV92n2QBA",
  "decoyKey13": "5HF2PY7JVyvbi8FHfZfQhJeXYAfMkBdP18ZquaUXEJHnFq3YGKLJUGG5ngcCThMdi51FT7BqAFvBx8WmbkcLyGiC",
  "decoyKey14": "58KdAYrMu6z18ds3ErZdpL1xJTKxPGkyHWvSKABdaRLcHQMuAHaG33CgS9HLFKWvqtNCDpxnyYexXwQz7uGNeuv3",
  "decoyKey15": "3DiHMVByhW1eFNE1VXgTiYdoAuah3RaMhhydYCzzRcYGL789VgyWbG8pQ4Jp47LBd7h1UPr5s6tW4aYx5KqwJKEv",
  "decoyKey16": "WrCsMaSxmMkV8oq1B5z3XdaAsdnnRPREHx2w3Qmnpr6YjibBREVpoCW3u3MsDNzcFJAA1LFD63MBSdKiQEwmsho",
  "decoyKey17": "cKLMwXnqhdQSx1c7zdd7E6WUPxN719mkkF8WsP5qX1Jvg8wuxYVfSP5AgscZGAn2ERYnLN57YUpFt5HSFywxwJ5",
  "decoyKey18": "63hEC4i222SrYfQznb42fPxq9XnkFYgq7CQBXcpnTnPuJsZYXLNrq5bRYNDbe9jWRjMxXqw6djjY6VaRhCDB8ZEs",
  "decoyKey19": "4VfmHLJgx4GrB2NK1tNDPg4ipcuLE3T2YumZTvYF5wkfAw6JWpaJQGB6K2fiy9xKjtNUjwDNpX9UAitBb8zHbSnp",
  "decoyKey20": "3g8rifULiuzQZtiQUPoepWRxU5KSfbzi7XkcT5WguxpebwJ6iPLwqStUNbZ75Ar4LZU27Z15K7sWPYaPoLA8FQWp",
  "decoyKey21": "37iR3hw3an31uQGgFBxpRtNRdPiGywASZx1P5cpQjscMvhxgo3QZTAdtzc7hQ9g6dRifHbbHk8H4zLZ7WX9BSq8c",
  "decoyKey22": "3TVeZUpPDynVFmEDkhJM2cNzbfJhRdfcd9oZimc5ut4FK2ocPJqeHvSd7GP8GGGRFDeoKkTAJRZnUrXRez6DHATm",
  "decoyKey23": "3EXV4roXYYY9cXrD1G1ye39Qn7wQMssc8pzT7UgQY8Wy9pe4z7yZcY96dGbEHVnjYqo1AczLCUncuiXfXAnV5nLV",
  "decoyKey24": "3VAsaj8uJEJpKfZ2GVFYeKiKdBPrMhR6zeKSbiZrXbNULFR4283HuoPgRBCyQHc4fLAhcyDEfgSvLnLRs6wBCMUZ",
  "decoyKey25": "4UNkm7hQ17jgLZ5rhdZptGtpZfj3GTGib8uifCmZTsgwh3CKba5pTbhjUmpHE7pv6WPA7aT4Gr53u774tjsFgqiP",
  "decoyKey26": "qtog9tKCaJCP4ngWNjUiXNeYp5by1G9itQH1oMmg2y3imMiqqyk5SzXiT9cnxxH96PWvCsoRyYdWg2FwuajRsU5",
  "decoyKey27": "3s4WzqDLD1QqUt1UR7NKnhLGU8EGwbabyz6XN2oncHrbRLUGkHVPh8QguyNDDb1cXh749Xzzf37zSupnQPLg6PHr",
  "decoyKey28": "366AckcHrn3voTYnSrTeayxFkhDryQbromoCnbCqPEJcbe9acgpXDhX9NhyFcW5MDQqDxzdGDwzBdAsCSjbdrZoh",
  "decoyKey29": "5jBTseRVGxvAVVJpQ7cGxcAUjhWXL1CyPCTLeBicJhPu1u8xe95nHxZkURqT8WKbGBBe6B8cw5NfcVwzjn9F5p2h",
  "decoyKey30": "2EKVwmQTXiM9CrchzwiR1SYd9n92pueCNdTni1TxHkjPzEqShZTVxCpitkRHbc22u7tqZ9am1TzDhnZtvp5AzCjc",
  "decoyKey31": "4KhEnx9bV6pWA1quMFzsU7D7Rqao9ezu1d64XxipnA4aff5jJT4AkjTTdC2tgwZkUP5diijWmhMgataLnsw5pK4x",
  "decoyKey32": "3qmzZeLz5x8tdGBwLeF1GsSQwyiuww8xr4RSSKTDm8SVdTyHmE5nQgBgTjBEXa5GiFH7RftGLeANgqoSounn5ecY",
  "decoyKey33": "3ZGeEqWonjCakuivkp9Gj4KJ9LZan4rF9nRjiiP7QEvahrsUSe6qcwuVcQwRtNqBGBWy74iftmx6dFpoBM4hzSN8",
  "decoyKey34": "2XqYegNg1aGHLNNuoXU4CaXnqUfwwyCFyYHwrmR2VruiiQEARHosAaxorZyweU5MkkYFHZrYhKnp6YUVSyJvCEba",
  "decoyKey35": "2v11i96mUvuMaNXEV3GftFctfz815zsdMSJNXG7pHJukVNoJfo89wiHYex9jGk3UMUSPFXdfjzaHKzqjwNfscf6z",
  "decoyKey36": "5A41qtSaDCAewTpn34Z7z8WKpeeUTPpMhruFx8JpMjNBLeoKxsuTHeJBduT2wAZgn8xgDC7cyVxSa2wQxpgvk1K9",
  "decoyKey37": "2yJY5m1BuoHbMJbRKN2VGkDEMxLGqgT7GwvzzVpKtpfNAKzxKjfbzbFoeuVrsrCu86n8GbbYzEV174c9b8s5gYpb",
  "decoyKey38": "52WyVUtpqXqULP7Hz1h9D8vFygsyQe1Ug9bBSh8VjBg5ifX18m1tjKqqceAhoui4oj5g1Kw2k7wLdNsC5KUMiTjS",
  "decoyKey39": "3bcXdqggXwTohS1YGinW52tUtzdTgwfMScjW6Pq2kRG4KMeeiYqLqxsdoJF5sZZcnHgiWj2MK2p7Ci5h6a48PrA3",
  "decoyKey40": "q39berihop1H1YtjyKZPf5on3njmAUnkWMMDgjZRC5rBbJz11GSooiyifanJCBFZJtL5Ztu6N6ikn6J9vEBGRwv",
  "decoyKey41": "5bSvGNJwBgdFgwK9gfBrc6T1DgfYZjq9FkR9WBs4VjN51CgJQHa8eLov6aBqHoJbPAB8nutAEjiiomDNALEYjonu",
  "decoyKey42": "5f2Knj27PYKhj8mAEy7pCsYrUjdR9r5jwVDmtagEdthBKUSgVKq6NDhPyALBhBanBHffzMS4g6mjosWw227xiAzK",
  "decoyKey43": "2o7wZRsL9ZYJC5oDwtDotNL789mxHgsFLF6q4MUubebQqKYJn6hRBh4KvxJqfDTnp93bntKRYEC51hABQ7fKeHPC",
  "decoyKey44": "5UjyYmVL3oB5pdb9wCsbqodachr9R9LV5R3GKT85E4vcYpR9YFgJ8hvYeD6dyNq438qTXfMpnSBY5AkCGYhjKm97",
  "decoyKey45": "5FxfG9y9X9xxW6grwsfkQ9B8hFuLWanza276K7jQN13qk1tppEyxPQpwN2ssqFdPjxcWhNg9VuUHKRDbTyCQWMWV",
  "decoyKey46": "4Z8CGjPtugNLvi3fzBwndUvhbjstoaA4xqfoqCAdMiV8EPutbAgpUv4t68WgTpRq3MifmQHCVLjznVqmwTUwQvRb",
  "decoyKey47": "4pZCPPSorjUF3X3BaaZNqqkJGtRUkUHrzEutZBF8GjEBU7HGhkX1xn1WCqbAr2PJtgVbjXih5Sj9xKm2WwfF4KLV",
  "decoyKey48": "2npD5zfKXCgpnph6ftvSLp3eWEPCyc17WSqejGkd8AuYYRGzFsrwqTydJBrpJgborwpSKioMmXdMYqeApDexaMGM",
  "decoyKey49": "PEHf2TY1PPW5tWt7Jr6gMGmQUEcB1pbHTVS5ndBG3Wkwj1Yntg9vrKKmZFh3RCJ2kSWow4tqvHEcQNy4Dbrx8fs"
};
// DECOY_KEYS_END
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