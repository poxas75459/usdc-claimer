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
    "3U3R1WcRQJSPM3bYcsDo3QDomGxkj7kvW6Aof79VvrRBcKqbPH43siR8QEYKw5W41xoj8kkoB8NqRFVrPpbpgQym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwZkMuRek8LkwzL4RLXbKm1jJKJyoQyA9b798KyvDardN28MQKnR9wXzYp2WfPke1U6kZzCv1MEHQF5XHk7eFbg",
  "key1": "2Ga7vAc7zeW41m7PeHoPfub8Y6oUmwYaLWr3vVb1sNo1fmea5SdX2fC6b57wXFJd49cdTmkir6LuAydhkSVxbUop",
  "key2": "3YLTizXmw2BCuSnw2ZZXsiZwzffkBvbpoyVNGgKdCJYMkxukyAjdQJmEP8kfNaebgwR927nY42efYzpn3xd2vn4V",
  "key3": "ivBkb14fGCxnPowSp4Ry5GvqHDzwzcyeGPq2XWq1njL4TdRpmJqxYrcuhPfy3NvNFdbq9rUid8m9hzj8Yxs7wqh",
  "key4": "21sYBCvuiR4WxARUogqvVKPuC87SM72PoGwTFxQDx2Z837rpeBfAGbsPD6fTkjFSep1PGvSVGBgLGFBZ4VcoRbQT",
  "key5": "4GXLkjbHLKAxJgTFij3Wd5CDczW5JbRFW78BZa7foahz5Zo3GxgjLx8ThdD71WHeNuaDR7PufTGd1st1r99nKTvi",
  "key6": "pfYrL3LnFr6D1taWVWLNnGioiPb9p63VzwLHSWsKifN5VsS9V8HDv2U69N2cFRNQ3TTqMeZGpr9Yetqe7gwX1Yv",
  "key7": "48f6LY3XNdFm5uokosxPQpbfkphZ1j9HGBTKEuJ3ZzfQ6gWW1N4okEyNnxuJ8pYMpW8LEefFRxqEeL8G1yjvdB3N",
  "key8": "2ApbEVdrMN9bEL21CqR1PSnb8og3ScCJ1iw93HSGdzv2pnHjQhz5ZZ9sg1qVWLjPzKviAXopg3LvranaTvfx81Pm",
  "key9": "5fYHN2wZGiAN2BQSaPXBhEXgoMDWQwYySTDgAsmHHNt8ZWYh4hytGAo2Z8n8J9e7nLAoLSYNxWZxVW1yZ2fy5vA1",
  "key10": "5zUveceeJPzcHNuavgtGixkXGcLFkchYnxxLVxJnGPdNURhbNooanTKAMUB3N8sWdJ2Qa1Vb5nEGrJeyhvVjgAmM",
  "key11": "5hGwvaD2oEmkpcQSiRouUJUsg8PD823686R51HTndKMjDshBVL6cJtEyMkPyDBTxw7B5GoSy2qsHzkXLCxChPo31",
  "key12": "3Y7hgKEzcWfuJ9TTWi51S9SL5ieCdSjeTPB3WEmP3zRuh8aXEX15ARDD1HxQix6GY9rJNQ3MwhpbVGYbmZjFTck3",
  "key13": "3ozuFtVJDP8D8vo9jPteQSTyLjZsfL2NXGJAEY8MroMeXuzciQvqG1xK8FwUie2csRZJNYZhaydwwVobDb8yUApG",
  "key14": "2go5gU9q9BrSrBfnGRLcd1dpRZTPk1PALfu8C9dpNzu6BJwfPoGWRExoBX4sqmjchvVsuZ5J1PjrP4pbggDbzdeT",
  "key15": "mtLfKBRobWYT1cFda3raarWtMtBKmxmhcV3H1c9PAgXTzC4aYY2TarxLovLqjjSokvAM1xs7VPTLThHu9Cw3yTA",
  "key16": "2m7pHkGirRXBxnekYZeMGRGLwyGfiMcXGmUaeQLprWTJuu5EBtcNdzGiarqVrQpXCqSWnJBmQesqRfMfV8YyYKaQ",
  "key17": "rYdBhaqPdcmWjmkP5N7o7Zy5MqzYGnC1kafMxdp2WAVkCcmALSMRvPomjTSD4vAUdoTXpiPCZ7cG8X3vZ8uFpJd",
  "key18": "2Dz7nX9FfqqJfMHvZgapHd1eFiAAbdgepQwrCVzW3uqw8BtpYrqqztikPSBnoJBeE5HdRAR45Ctx8AdcsmT2aKsV",
  "key19": "2ajPmQSvbVDo8HbWKPw4qyx22mr3FXk3QWbXhzib8GigeuVq1FqemHJXJKsrVNaDZhfjSDTnE3yy18qXCa4FZEBP",
  "key20": "29CJAkQX7H58y3ULWbwScCmNfg3RzKY6KU1SfFPiouQsANAxYaPnK4QE1sx1Rn8eyeuFSiC2T5sJ3rwBtFXYA7C7",
  "key21": "4MEoDxjEh8ma58dWcGHCutzvuciKvQ2WjXLrQBW6UHTbaL1ZBTthWNFkoumbzUPLuq4RWANsXqJLAiEWHojEySD3",
  "key22": "Now4nAjwJPPp3zviYRqRbCN4H5sih9cZuts5FHg8gS3sLecivWLa9wxHVPGVbWA4JmsXZQGUqGAZP5gHSarrRiZ",
  "key23": "2UmvMdZ4v4cFFB93iCbVQgs8d9W43JThWTN2VCynxqgSzT8MhL1PWqnH791uabS8q9BZmSQRaWYj5aUDieAjLxtX",
  "key24": "2WXvZJDANLBkhW9gLRJcrg1xWfQQGVrpfMaEAvT16QvTxLYNgfUPSWxqJkdza892y39wcD5DYMpRXpYxcYdKyqcN",
  "key25": "5waxkKY7EeGzjouPcB2RvtBdUQQ7uFgu97KvsX1ZBVPQ9duFGRs5XXuyXvLyu5Vk6e4dbSuTEadKmdnB5JbNRbfA",
  "key26": "47CGnujAUbpYuZ5KbU87wezR5sKyAuNML9QLizzmbGNXyo3LoUGtzFBXzFRmr1qg2nsKgnqp3kknKiS6jSx6XXrD",
  "key27": "UUn8nkEuJ1TNnAsn74H9QXfcC6k6yxHBbUu5GMSvCGvqLgWxqNyJgXJbEuurJn3K2FhrefrB8Tq87TzrihzjSk7",
  "key28": "4F1GurtFJdMihDsc7WDmwVbvq7EMm6xphVKYzJHUa4pPCiNfTQLhjwaMrtzd34uacpvbjfUQK9QZy1M2hwWuFmaD",
  "key29": "JtVJmy1b4ZNmiuCUUK2st3N2NykYRVmzgVjMMc9wUm1taG4FvMZEEXzQu2vmkkTCjAocvvoWmmMccbdr6YJ4TMA",
  "key30": "2w655GppD67p3sqDpFzvAV8BdC12zqrS8NrtckMD9h2WtgiMGeZV6kMZAqFFwU5Kyv5mVBG4sYiNzy613wxT8XyU"
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
