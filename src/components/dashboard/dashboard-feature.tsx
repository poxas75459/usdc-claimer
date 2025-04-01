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
    "56SXDgNfJ2CSxnPsEHgRoY4rbTFANaWDdQKoDERud8rRUepGP459DU9ZQTWPc515t4Bjm7tTBJVNXYh98gvZ7BhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sed6csz2J1A8FPHVJrHYSgN9bDGAc76dC5y2E7s3uir85YkMTX1FRK1Xnfa1Xfdf32Ta1xM8PdeXbBK7tVnw6Su",
  "key1": "fGejWx16bu33JSLN9QbvUUWpyiCLG1xL4WWMWdq5bmb6SSkvbGDFpjkyKTGgbmQpKF8jZPQyWsmRuP3dCK4iFzZ",
  "key2": "5xDUUxDV8hezoWcXsY9VAiDqrVSk37BnjgmtqGKdQsmv1NEGtnH6JcrEUdZBmFnUQVP1a1hjuR5ksxd2VqwMJ6L3",
  "key3": "aoQNnkoH9vC1Y7EmLaZZJe8VKsCWSX49fAJHSxN1vGv2aYLmnRCEPAD8P2z7mKJjyZgTMPQX1PLJT9e12JdCdcH",
  "key4": "48q3VDfumLmsGrhyqhJwoWeNC3rfqXnEpXPGj13kdJr3EyXw13ByrGPGQiinE5ncPHHEm3ZGgtgvBGkgqUgNzav7",
  "key5": "46vkMjaByjTyNhd5f86LYmDw2k7eJGk8sdeGhfXgQ23DE3YuiTBbUmj6roTNgACFFVEht6chvXJ2hVhT2wdoRSAh",
  "key6": "4zCBWTQdUyUJvACiH2UU8FxggyHXTT1sMAiXC9kK8RexH8SsnxwEFrnrd3sVPWzdvSB51SAnqXgbZeajPwWA4vvY",
  "key7": "3kFdmMLGAtMKPrjiMReWtMMQ4vgKEoJRpG4zcjaYhN5WNQ55BEVZ4bXoL1v4xH5hF9WrvdhqXT8DoDZ1uQee2RDe",
  "key8": "2zVKHJfKSDes1TPPucuQcVsPwKRjUnoUkyiemg6HmphNoByvr45sFLB8FJpShb5f7piTskWnx3nT4EMjreUj2yhR",
  "key9": "51XU3yFiDG7t9YvgsXmw47rn2t4Z5Awn1tNksRCgpGHf57e65KKLwjQDwtymaRLN4CZSTzd9V8AQjj3k2fGJ7Fxt",
  "key10": "57BJhazpq9V5NhhUkQHrfDJX43dezbsrJv7oJs9n9AfSsUtCC5cxiibiDiXNxPKLrvtZfAmDorncTnLSgcCQ3Z44",
  "key11": "5n7DLrb9tNj9GgujyRu98EdapokiJkjtm6q4Tkac8UmAckceZSCtBW1F1HPJgsg2ekQz1W3XdMuQwqAhzbVNyAbH",
  "key12": "3R7GFtXuZRY6aqkBB9K38WNTZB3jaZ3dSDzJQvRY7o4jLRGSq6w2jk7oc7vSK26yyvAj8LWCHMfRzpSmcDhUomFu",
  "key13": "2AA3u3xpXGetWCpum7SXpBrXmtQ1TJGNFHSfeiy9Hp717GKKc4qnPRZpMYR8kP9ybujrqtCL2dsHiL82z8TqnN86",
  "key14": "3w7wRHMSsLjYKwRaspbbf7JfjVpDHy1vNJhiEW5eDUJYCi8NU6NtxYzrCrx7MHnfLSx3ycJKEmGE1WwT569R56Tt",
  "key15": "3fNVuArDGDPYZykUeRaFRk9tJX9dcmuD6BtMrRD2XzAaA87ALDh6nqdCrdFeTRWdLV4WbKLZvodPFZC7N27NdNpj",
  "key16": "3CVVn7zF3EW3dihrrDFMuwoRzfpfwFqe9poTHoqPa6iDSzhHmE7uEi1XGpfT8G3iSZMXPE1igHvLDwAaHYZKFgAx",
  "key17": "2cZcvKHVDpwWsiHHszSzssSawSxTWwPfNTxf65KnnoRFVqL5bNa8ARt5zpKkkAosEugVrBm1ECMXSFNPkUi6oUcU",
  "key18": "3UVZJW28e2RTcWzq4ABZbFTu2tAvW9ecs3uCqdDPg2fpii95jBsnuuAWKpmrKcsaBnEEjwaExmmdJVK74vikN7YG",
  "key19": "2w2rTAe2MhVdnUBm7sEFeawfFchfFPgawcwodjWrDzu5Tca7P5uRvR2qhpZW7EEToUwmk4gF38VTyxywPNUt1s9Z",
  "key20": "2cMPN1KncYSNDPbUxPFxHCrrBG7Ny7ULYXHNR7TV8Smim6qYRUauPVGYsyUbvKFX1pxbS2FMfhFvWWgtq5eFN3X5",
  "key21": "3GxPq47iQyZdWQrACikLWvdujanaQQY8aagiYeKubCxK8kJ7NiWVqVY9z5zyVuZxKqf67FqSKcmNsunf9WT4DMJt",
  "key22": "5AdcSxEX3d5wTn6SNqYbMNxErfGm6wsJkpbmxfwrsS1mtDyZ81PbHzRs38YbJbwEBqch8z8seXZriBUpepwJwQxv",
  "key23": "4eg5PXWH69huQrBrEd8QtpUXsvGEXzhZ9dHi2QDuPt26zqyptp9aNVENWCLqvoVtGzVNecF6NkCLbWz9iTNY8Szy",
  "key24": "5bFHpj4xhhkN2vxYKXjTviBf1CZHDAXY6UhAjFRhaPxfyTdvFEzv3ZP17RKjxK4FwpXyBRpvtwBXPnSU8mr57vQp",
  "key25": "PTRPkYi48ecWPMsQwTeysnhdE6JTQZcoEfhCFfth7v2wjRFQwcUe38zEiaEhXWdZChzSVGrLDdhBTAP92Ff9fh3",
  "key26": "2RUaGy16zed8BSEakcH5hj6S9dVkcaau4mVrsMgEWRie6fYDgYib1GBtFDzYEtCMukqyDoE2BfxZuAUfYxmDBaC5",
  "key27": "5dG76tq9NShnCRzxkmGpH12rXQH8SEX4n9nkahqnRwTnc87Yfka2kk6zDBiB1PB8jDzb6WvXTAd1i6CiS66g944m",
  "key28": "5EkFnzqc2LuZ3HBMGpkb4uAafy2XMgrin19gdhnt8SdMRC8xPrJcGnxKorPrMuBSGQRpAMHAzUVhsdLR1Uf3XCg2",
  "key29": "3kg3Uo4oc6f1NjT82aqrGWpzMmetUcivhthQ5BPSc88owMdpSSbuMHrfuvM5ENv2jQY6nhRUiKpgReG3KHTSmqeN"
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
