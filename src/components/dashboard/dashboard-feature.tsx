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
    "4tzAcrAih65QHmAKcctq2XZaJ9woQafXDN4sZRyaRtbg948woqv8njeFG3hwWh1BRDpw8GAEhuwdibjwfdUe1aqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38XCgSqkFtusb1QUPWP3m8yrQdoBkCQdToEmcfd2s4K1pcvCpjFbNfyBMzL3JH5epn8k3E1DbWGHmmuqLjREmuR7",
  "key1": "yRwhakBApxEqJfXtdcMzdWqSZdtt5g11ifB8Rtvmv6uXUka5YXUXC5ypc8sjpT6UmKvg6UEQ6wtc3ZFMv2oK48B",
  "key2": "29gsBKfUum3cz1PbK1oMjPhZTfUUPg5E9xKNyLGPjfN7g7nzKdiB6Z5aBpYgnGth3YUYtC2bPAkSPHxxDQCnxkEq",
  "key3": "3ddbpFz8BTKymHKQJUTvmgBGjX8cjwCvQd2xCCZRBEVtvvTvXYA2CcXWnxNsc3cKasdcBhCkUG8AzyPHcs6TetgT",
  "key4": "zEkkL5J11UyZPxqJz3aVwJesVoxzAQjZ99iubzSFtNMZyXCToLKfXjC5v6CARGoFdxnVga4Rb7VKzCXsCRgd2e8",
  "key5": "Rc55Hup1uczwZdmAB13GnWhdHkBzu2b48tovysheQHTCKbcujMnFVgFFVuSzLyb9usEHh5JdTGtabq1FrncAHbr",
  "key6": "5XBu9uWDJ2u2R3PTXDZwxvMaaYhkuFDhtRsEPqi4YriXTfHDJ7FZHUnrouFFxVmHEhAdp2hqDVWELDcgcv3E7cdv",
  "key7": "5GnTJCRTjUs3MoJycSdQvDx6RokzwvZmNqMSFDo2eUaLvetZW3HG4pm9RUdJVavbyZFnvGgjJ8QSWei8K1NJqwgv",
  "key8": "57vSfwXPydEhTv6QK2fuKL5jNXYgNpSLsnDanidXEC85vJwCHKe6FcEpdoNynzDze4bCjruGCrHaxaSBBcvppXWG",
  "key9": "3ECcyENvjxj7bTmf6P64JosZ7o4AiZQujGwqMPm6vzei5HnaSWvaSoeSd3rrzT4LQbtUfeavLsUCNevTeFmY83km",
  "key10": "3dvkvHBYe3EoUct6oAqYhWbqMnzEQ3RaDMvPjyY5F96wwRQHgMTVvipQUVJGobr2j4AnixdNPbUrtEHHXpBp424y",
  "key11": "5YDamXjvgGFKeZDFsEvWydt9rNp3SqBLa4XaNYeZZdjS2JUHXKCqmpHfWy7ggQVsoCG8roQnvNgusBARVvaZu2GC",
  "key12": "5Qjk4wn1XMh1ZRhCMqJmZLuqLQWJXMcV38Lyv52DA2mRJJfr5nRjjXEyKvQzPAQx2ZrkqnHMwP2pMyP2KyNTAg7j",
  "key13": "617r3Bq1p6Pf2yKnz9LYNNXTmyymTLS85VPcro5vhLhhxTYfCjMv4i8fuumHj5JANM4gxAjGkfcAEnk3c3v33HeF",
  "key14": "5QXGufRPkVhcLejvQpYtAhzPHPeC7CGcMBVDUybXbKt1pQgYxvW7sHgiePUakYteBHn6fUpkosrMxdY4QDm7TePR",
  "key15": "5qs85muPmaqtUGxhqArYQgb2qfppj2XSPFTEapWrJ2gxhdhVoLXv3So5kVNkwnByinLAYfJwMeVrTctSah3Qto7V",
  "key16": "VRU1QebChgpymPeQ7tiSyidmVobqXfxcFMU2jhiPNwUKorfK353G57DYkoQFVRnyG2HsH6K4D8LZtMYNoGqRjmj",
  "key17": "DXWHPozeuRzyD9iKpVZ45zhAVmLVyCYja638znF6d7XVbvWN3635NcRx3RvyQpuWDiC4Xqe3HBfBzVxUDHuWT8X",
  "key18": "5TU4MpnsG3rTX6WgF96tYBKxFhvbFSRVstwaV7h2B3zB1StmZrm6juN5ko7z1zQJB7dDiE4kSJBqTwTqWiiYQvTF",
  "key19": "2XbPR2imXhWZjTqE1qeYqUXWUaxVdU8vEhkAdQveGARhkJmwCJ6RE9LkbQZjpnBZSDW6WX3BBiDb2FHSD9B954Zu",
  "key20": "4169tCdQ3KtTDXXbF1e4chCmoeLtPECwFjVaTj7uNwYwQLBEgVCENxymCrjKDgRrLFgnFXNwGS9E7tgH31262kUX",
  "key21": "2pqoVVcvCrL2CwePZBAbTQv6eiuVEkoNEZqtRdaYvEuJt8PyshNTGuF2updMf6Q1bwh2qmqZfdgUuDJZGLWfL1Zk",
  "key22": "5c2ZHWqGLhFoLCxYWk2zBptd91afeadPtEiCpUU4JgFszoeuBQ6ngezT4nt9AceUevmpwAPRAX5Rw1zjqBrW6yZZ",
  "key23": "25zGe68Xj4NhAnpMK8nAwSaneq9srF79QeBuPfhbXPBMsrkgdRj3G4ec4eBS3EF3ELGKCcK7pix56xM5m4iVNF3U",
  "key24": "2LGiSbWMFmwtwnodV87Ug75wxAc2xiMat6qafmzdJJ2q1DsXqM52FMFdDLpEDKraqPyNrN6q4fyvDZVaNvXgwF2X",
  "key25": "2KMknjY6HstZxGL1ipEskPkhYNVAYAypRz9GQzpzrRHRmdpbXUxwScH3LaQrhxnPZ3Z2DF7e6MLLfdMzuRozcZiY",
  "key26": "3fNdVt7FADNtGxcSqgaUbGy1LQ5u749Kn64voGxGXPZ21tfHgcu4o8tfbMYrRjp47sK2LGD7US7xpDWqJL5FHpWt",
  "key27": "3URf99Hp4L12cJzVYSgrUtcfK6wXz4bKCN6E6sYs7ePxGcsEdsSsmYaYJsdz6wgfyfox1bzvqQa1g1Bp84HFPzXc",
  "key28": "2xWPiMrWiLoJETk2MKQzixoMGWkSZ1dWAxZzrhLVeK2n3GBMDfHJPNX3NTerdpgc99UCJzwpVLeFe51jHHAHYTrj"
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
