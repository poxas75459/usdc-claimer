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
    "mprDdUi47MgEnVa9rSUmLAVZsP2LLK2y6fnmgvfyjeeZ7Y8wnGCPFUJhq1xX5f7JADV6SpYeSQ694g7UQZ5wbiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6vyJe7uPhL58ozm3wZWcLdhNTwjSF2rS4mUfoGcp7vPMDK4qHqB8fWh4TjCFFYKzLPpY6R1YL6LyUz3ezJd1jCw",
  "key1": "2NwXqofPEYdx43VadRY8cGmc1Qjd2D7yS2CCvB334aa5ev1Kqgk58RvEHyiGcgNxNsS21ucdDDcqsfDSMBENFpaz",
  "key2": "4ivSQjfeSUzgEuiqs5F4gbL92FkLro37eiwKkqh6fasd66oLhbvkfMX5jYbuUt22EujzqLeqaqt4vGdBuB6rqD68",
  "key3": "2o37VCrSn8EKUSbixkvY3xKSqChQJNYRencjj7BSWEKift94QKDpLEyCND83HuxZ4qKKDNfCCeEZ94knq5Uo4iB2",
  "key4": "UQxunSiH72KHVJimSaWhzGBZTbeavAzoTin7xWgU7Ui9ARbxdfTjadmvzQnbhdFu9HYpNJBMZ5GjcnshmAytLkq",
  "key5": "65gqLojuxzsNJB9Vo9N4FXUgGXQkTKiLDy4mm9J32vAMWKA54cNqMoJjMCkV2bP4YEBSqovQZSZSZ9etB2827jua",
  "key6": "5Bzm8o7mCCiDv45jGmtuGLhr7zoiRcnjuLrx3xivnPXqFQ8QdbfiEYFWBd7ecjSsHWoBchGGXn42k8QX7NicRwDN",
  "key7": "4tTcFgg9bELUZHnxhV87DRK92mWxftonRfJ9FJzz9DrrH37Ex3JS74NxC5GCnJocQYisixVyUaqsAXCZPojwcxo4",
  "key8": "sc62oY9u8tYu6ysNaAbYMHwsRpsavuZ3VL63CbmnCKHwbeweRvFGvSXEXot33CZ8muQFAt8vwV1dY9fZFpLmz54",
  "key9": "3tMvumL7WePKboovbAFgWwuujq1iGNTgTciCkzWE4iiXdk8HPE6PXqgsG2PpF2Lecnq1S9sTKXopns4msV5por45",
  "key10": "2zWpMVamNTU8q5SEcT9vEdWhZqp6VrdY7EUA33tjDm6ifcjfhHfLaQUnyPGiruFUqcNEsw156X4GkhsvoQAyBT1n",
  "key11": "3DN8vXPhrdQdSTXQLdM5wnjSyVXNfjVZAobGiCbassXpjrsr6dQsJy4kXHdS1hapju7dYv1B6uprzahHRb9qghBt",
  "key12": "3Xxvkn17cCSutkqupeUdtzUbvNveUETvg2sa7NTxjpsXiaJEZKUdrJYMuCPDhgLt3CrewBHYjFnHeYJLSxHeCqmb",
  "key13": "5A9yfszn4AS9SaYu7oPWoXGc2rvzFTu3dVT7Gy7SeRHn3CMG22offbueas6vZaGG5Z5X6sn1xyNYeFZJUXgnWBF8",
  "key14": "2SRqCLLM5Aydt6p8EchMSSd7wuahMMNmdpGK8wmk2BdrXBt4vFCkDDuEcwnodAApR68nYTBHG1gqQLrsyfhbAVpK",
  "key15": "5nYRd3NZF1ug4ogu7hX4hobRte7Zvyu28Jto4gwott6522cbQZpCRsaJsuhH7aGLj1nJbRD5YtLMQpLBtDSDtZg1",
  "key16": "TJUXXYLrHoZ8NRFEMbsNsyiPRdnpLBtHzaECuphBUACa4s6fkgaxMcpscJ8wtT6Awx2Yu3n91ZYezDEVVpVMKTX",
  "key17": "65gTDvSWcTCUatzB1Zew3xnnh9UiKD6oXRPFjSWzCmF9cAZuCWdPEZ6nRVzGciDkBJqWLa2KZCVBrCpvDS5YocTE",
  "key18": "37GdhkdtKWTnrJexSkHJ329HwVCKnkMRssYSQgRmzEAqt44PVLBSdvCT6j8PyTvbx3mzEpzhfbuDU85Y7hEFA1cg",
  "key19": "3jF4bAv6HpF4Kr4Nx1S244XMcB3CogQ5z8R4tALo2LbURbXqY3dvNQtZoJEqmWEQdGurvoPH2iugz64tVVLemFZs",
  "key20": "An7d5Rkoau9eKFCLtvfFtQRPPQ3WUbSm4dVS4ir2GwomCf4FwNJhjADiQUADrxTLuGBK3kEbSTKCRtJ99HvonH9",
  "key21": "Uz1nWWq9ZjKBAqJCK4YCtfe5zhY1f6sXYA1bAaXHtYP8b3w2dKdv4fWwinj1WYmJ5r1VnQ5KBF3X55M7WFxL9g2",
  "key22": "3cfuMVCR69xys2aqYQg4P3ZyiapNgLz6DzWLizDPyngugjdds5JPvqnZbXCpsxjPwWdBQPiXq3Z19nZB4SzZQwm9",
  "key23": "K8UM7huZ95c53MUiVtBCVUL7cQ3B5mAJtt6dtjFuUbE9L6rhG3og1w2fqnxJmkkfFwscLjzi3R6XuGBXAmrc2va",
  "key24": "4TV5VVX2EuQveZ7ToZidZiGPJwq53Fa3ZVXSATzqPidYjEszbBtxFbLnDyJvJecoLReCHJqjqVXZvWbakT2vc4Lr",
  "key25": "d5FwiZpw71R5Fh73P9kP1D71fcwpgCS6rY9bc8j13RpRuembswaJbK7H1ZNwxA6uyGYVzi7RB6rTPWaSJDYRcDG"
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
