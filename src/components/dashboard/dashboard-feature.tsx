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
    "R5JFcvbDwTQBBjGjRrs7Zun8GXc2erDrfw9jrCPYicALiyBm5Hp4thap3ZZ1KTfYddAk51ysUB7vWqT1xRUNquL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zg7pChhMQpKTxHSh2SAYPWRCHFVuPufWoUJwJaUG1xcwuRB7Ur4ecomWTzJzSuuLg36vnCSy3EuNMGMTMx1HZmn",
  "key1": "2WxxbQK58w3YUCJyFR2J5NP1pZWawc2KjHNdBtiz8Qw5NRYR84p1ner75SwfBCPFd4TFCLTpLCuHZVkprQLbRZ35",
  "key2": "4WwvBcMubivy4qoLJbpym6WHcmBidwmB9tgmTtSb9jNMRgt66BP3wcRLWe2rrT8dvmbHJZs9X9bqi614sPkQk9Bv",
  "key3": "Ut43tQQ8kn4uve1wWnWfhpAbR5xDGXoomZaazW4r31nthNdYS7bConfcuREKk9tm5r4NpnTk2YaiwJGrg7saAZL",
  "key4": "sYxMgx1qFuHrHxXEJ1zEhvTiHGo3Eq4scYWJ8YJGFkaVwxqN2VnJHtiSniZjMBXmNgDq18dgYTgwKgHpi47HRiG",
  "key5": "nW2atmE55aADqpGh6FBG3zRkziwM3t9GZiB3kHYj4ejN4MHpwuFRhD2Sn1tkNxrYR9UFRTNJiXySZG8MVmjyzCv",
  "key6": "seAxRAo375tE1DRMh1QBRtkmJSMCiVUcrrVEhYG1fuQUQiFiC212izr6Brfx3TBK3owACxgYgEmLzVxjN7YAafD",
  "key7": "u2u84mvqxuaC5gHFeYtC89eNy8roFKKJtrdEHF6aoRmpjYYhENjNUhVfTXEqUUhQDKVjNct5fYJ46Ug9bPFazm2",
  "key8": "X2tUhn5qZKiKn29SLew6PY9oTD6tNtcBqZfK3uzQguu7awPA8vgC2BcWVTDuTGHUVPjUKzvK1i5mzUtsoaYpd4J",
  "key9": "5EdC5w83hmgQmReHcoQoyr3jGDNL3bHEcV1hiujjDBXok1VK1dHMDBw9jQBjR3qaeZVHjJMFT78fSgSGbpjvFf77",
  "key10": "3E8gijxUeub5YisSqMo77cdHpvuovoNV9gynBk4W15vGn7ndZz88zsaM6v6DAb4e8p2RbWSY8TUwHnMgSBrSbK8G",
  "key11": "31RKeXYAU3SzZpebBmT4Xi9R69SRqxjLb1TidoKTgTFFeA6ZymvkLffNAcPe9bYWLJrSkc7uwJLGovz95uST85Z7",
  "key12": "uBF9oLtJ7KT255wDAFUZMy21yvBohomap3VdC2RyVZhAjnH6FqZ6hf47fWa5bxXE3JLnRVy96DTARnsVYdQKLe4",
  "key13": "4Sv2Rnp3DNcBrn1HfvTRz7YV9tz9bbp5nEjZyMojDYYwLohqZEUB33GWW2hR5rK17jz5nBc4fNgeAqPmkFhNzifK",
  "key14": "BCq3kPjH9yACVPVmqPKtKjkJ19srQnCvN3NtxAeEPqE4coguWxzYznN9cd9LWPFTuZG8z3tUVUAFPEjiiYKfZJv",
  "key15": "32psmVYXzJNWRJuLmRnjw4mS6T3tbpqNk1MRK69k3eBKCy7UCy9pFUVHC5uEtc53QkhtYfMeNeRTt6ZuRoPMaT7w",
  "key16": "4i6GXpHdyuE29n7Mfx8DQqswRFcza8cptmzchhgxhfvZc8KfrEPYTgEVjdXWsBUhXWWKkzyBEy7MAm2jmroRVMmr",
  "key17": "5J9wwPK2tzoVzFrcMsWxSwhnnwwPqRz8yqvm2k1qj2qK4ZsZ6fVDEPT9Ac4h9teur5YFk2vPtmhQLmXMPaA9Gu9f",
  "key18": "5Lq6pWkcnDpWsywuskeZPwtcL9XsoJKz58Li9Vgdm67VLubfcjs2i1YQtWGnJzepU6RP4s6UBSTpKyTx4Bwbczzj",
  "key19": "3xEMF8DXN5riiqKEqbAWC2wMM6nDC4cNuiWQuMpa3GCwDdGRRhnBNfZ2WH8yjTj63mi6TGzFBbmvTLuZv1zJTBnq",
  "key20": "K5UiMC5pwcRXk3QbeLTJq29xxzP1oKWYLxcB9tpKdQVGu37YpHcUKqFkM16CNSpUKRHoqfZ7u25p4zov9crhm5e",
  "key21": "61Kx3Kac1hXHys8afmCkkBgWm9cWWc8UKtMZ24BJ8kv7kWQ56jFvGmWC9jgnJgSBPMsuzxWLEX1KaAyK5e12fPaY",
  "key22": "5BeT1hbTXyKrKw8ATTRmrgtPoiNni1vRGwYCAba6VA2AZZgjGSLMD3SK4zsox4rTRfnpDurYScSjhcEvEuP1rvFv",
  "key23": "g9LsQq5UE1UXfxdGjHLixPVAx1c1vWboZDg2hK7q5MYAYwryHdPozZakko6Wx18sU1jfSyJ9JCWr55MjQGRbiQb",
  "key24": "3oYStvb4zuwpaTgRrHwWkL9y2kZreny9sJdkHGrMPudN4pgLxQAEEc4rum7sPCY9ASD4DQf56aNmremfTRYF3Ley",
  "key25": "jnas3iMATG8rMvPVkZuj3BjiwP8EpMPNu8TRzYTM14v8YXst8QMjtAV9QLgydioXD5oQiybKf4EZ6B8uWUyV2wy",
  "key26": "ohX7VxENGQX4JWKZMocm5botmQb3n3rDDqoBJKF8Pprzxv2rtK1Hd38ndg1AGARMSXoL9kKrQLGG8aeyFrLe8ED",
  "key27": "4AdSQB4BsdQGYZ62i23BzYKBrDzqgRgxZZwPnqPhNTjFhAHgtVJB5EyUthxY364ZYBF7EmRZ3C1c7jg3WbR5TL3N",
  "key28": "5siVkVZESNRkZhS4vhPsi2rVhiTYJzh6yju97satCGZoWRXF1mHgEoTBmyt5Rt3k3feGmRnq2f7DyoyKZWuqFSFG",
  "key29": "5N92GeTdk3LjC31psfGeBUX5a6QhrAPcRVXvBXtg1hstusCjuJbuo7abrZvg6PWAyT1KeUMMwme4MsXZ69MDMH6L",
  "key30": "5c4ihwgADKQUawPhGFo8MNsJbmUHgn4ZJu9SAaHuC4zjgA63ct8qS3gZErYJneL5ervVG8CTej1JU4pbVs1XjDmM",
  "key31": "5FwH7JoBhfMEX3bsXeVYHZV5fURCr5ra6Hs194gkhMgk7URCUSQPYtfDvJd8UtryP8bM9ziAWkp7GB539HQiosV4",
  "key32": "3tKAk8maetfuQLJZxRuk3KS5hpszCU237qiLppvVBq7xdWZCFpZMZhavLEw77KMvHJTZDvrheXx4EA2jzVwym3NZ",
  "key33": "3i6joGeNF4zwXDXJmLsZCXsLJfsFaaaiFCQARDuKWGhpPxC63GtWVyFoXescjBRveKVubtBVtfGU8Ld1whmQrVfZ",
  "key34": "3eweetYJHVphbth3k7Yun21FGyhGStyQLCUMTSd2v9ZMbfckVXp7XAY6ftioybuU4h1d2qcBGWVNgWnrfc1532Dj"
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
